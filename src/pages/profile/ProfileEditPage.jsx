import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Box, Flex, Image, Label, Svg, Input } from "../../common";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../common/hooks/useInput";
import { __checkNick } from "../../redux/modules/join/joinSlice";
import { updatePro } from "../../redux/modules/profileSlice";

const ProfileEdit = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	const nickname = useInput("");

	const [isBlue, setIsBlue] = useState(false);
	const [name, setName] = useState("");
	const [profile, setProfile] = useState({
		id: id,
		nickname: "",
		profileImage: "",
	});

	const checkNickname = useSelector(
		state => state?.join?.checkNickResult.status,
	);
	//닉네임 정규식
	// 1. 2-6자, 영어 대소문자 또는 숫자 또는 한글로 구성
	// 2. 특이사항 : 한글 초성 및 모음은 허가하지 않는다.
	const regNick = /^(?=.*[a-z0-9A-Z가-힣])[a-z0-9A-Z가-힣]{2,6}$/;

	const checkNicknameHandler = () => {
		if (regNick.test(nickname.value)) {
			dispatch(__checkNick({ nickname: nickname.value }));
		}
	};

	const postHandler = e => {
		setName(e.target.value);
		const { value, name } = e.target;
		setProfile({
			...profile,
			[name]: value,
			profileImage: uploadImageForm,
		});
	};

	const updateHandler = () => {
		dispatch(updatePro(profile));
	};

	// image preview useState
	const [previewImage, setPreviewImage] = useState("");
	const [uploadImageForm, setUploadImageForm] = useState(null);

	const imgFileHandler = e => {
		setUploadImageForm(e.target.files[0]);

		let reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onload = () => {
			const previewImgUrl = reader.result;
			if (previewImgUrl) {
				setPreviewImage([...previewImage, previewImgUrl]);
			}
		};
	};

	const user = useSelector(state => state.profileSlice.profile);

	return (
		<Flex
			dir="column"
			mw="375px"
			mxw="375px"
			mh="667px"
			mg="0 auto"
			style={{ overflow: "auto" }}
		>
			<Flex wd="375px" mg="auto" dir="column">
				<Flex wd="335px" jc="space-between">
					<Svg variant="chevron" onClick={() => navigate("/profile/:id")} />
					<Flex
						fs="18"
						fw="600"
						style={{ cursor: "pointer" }}
						onClick={updateHandler}
					>
						저장
					</Flex>
				</Flex>
				<Box variant="imageLayout">
					<Label variant="imageLabel" htmlFor="file" />
					<Input
						variant="imageInput"
						id="addFile"
						type="file"
						name="imageUrl"
						placeholder="업로드"
						accept={"image/*"}
						onChange={imgFileHandler}
					/>
					<Image
						variant="imagePreview"
						src={previewImage === "" ? user.profileImage : previewImage}
					/>
				</Box>
				<Flex
					wd="335px"
					ht="26px"
					fw="600"
					fs="14"
					lh="26"
					jc="flex-start"
					mg="0 0 5px 0"
				>
					닉네임
				</Flex>
				{isBlue === false ? (
					<Box variant="stnickname" style={{ marginBottom: "7px" }}>
						<Input
							id="nickname"
							name="nickname"
							onBlur={checkNicknameHandler}
							defaultValue={user.nickname}
							onChange={postHandler}
							type="text"
							variant="join"
						/>
						<Flex wd="24px" ht="24px" mg="0 13px 0 0">
							{nickname.value.trim() === "" ? null : (
								<Svg onClick={nickname.onReset} variant="InputReset" />
							)}
						</Flex>
					</Box>
				) : (
					<Box variant="stnicknameBlue">
						<Input
							id="nickname"
							name="nickname"
							onBlur={checkNicknameHandler}
							value={nickname.value}
							onChange={postHandler}
							type="text"
							variant="changeBlue"
							placeholder="닉네임을 입력하세요"
						/>
						<Flex wd="24px" ht="24px" mg="0 13px 0 0">
							{nickname.value.trim() === "" ? null : (
								<Svg variant="InputReset" onClick={nickname.onReset} />
							)}
						</Flex>
					</Box>
				)}
				<Flex dir="row" wd="335px" ht="26px">
					{nickname.value.trim() === "" ? (
						<Flex dir="row" wd="335px" ht="26px" fs="12" ai="center"></Flex>
					) : !regNick.test(nickname.value) ? (
						<Flex
							dir="row"
							wd="335px"
							ht="26px"
							fs="12"
							ai="center"
							jc="flex-start"
						>
							<Box variant="stSvg">
								<Svg variant="alert" />
							</Box>
							<Box variant="stInfo">
								닉네임은 2-6자, 영어 대소문자,숫자 또는 한글로 구성됩니다.
							</Box>
						</Flex>
					) : checkNickname !== 200 ? (
						<Flex
							dir="row"
							wd="335px"
							ht="26px"
							fs="12"
							ai="center"
							jc="flex-start"
						>
							<Box variant="stSvg">
								<Svg variant="alert" />
							</Box>
							<Box variant="stInfo">이미 사용중인 닉네임입니다.</Box>
						</Flex>
					) : (
						<Flex
							dir="row"
							wd="335px"
							ht="26px"
							fs="12"
							ai="center"
							jc="flex-start"
						>
							<Box variant="stSvg">
								<Svg variant="alert" />
							</Box>
							<Box variant="stInfo">사용가능한 닉네임입니다.</Box>
						</Flex>
					)}
				</Flex>
				<Flex
					wd="335px"
					ht="26px"
					fw="600"
					fs="14"
					lh="26"
					jc="flex-start"
					mg="0 0 5px 0"
				>
					이메일
				</Flex>
				<Box variant="stEmail" style={{ marginBottom: "26px" }}>
					<Input
						type="text"
						variant="join"
						defaultValue={user.email}
						disabled
						style={{ fontSize: "16px", fontWeight: 400, color: "#C8C8C8" }}
					/>
				</Box>
				<Flex
					wd="335px"
					ht="26px"
					fw="600"
					fs="14"
					lh="26"
					jc="flex-start"
					mg="0 0 5px 0"
				>
					비밀번호
				</Flex>
				<Flex>
					<Box variant="stPassword" style={{ marginBottom: "26px" }}>
						<Input
							type="password"
							defaultValue="12341234!"
							variant="join"
							disabled
							style={{ fontSize: "16px", fontWeight: 400, color: "#C8C8C8" }}
						/>
					</Box>
				</Flex>
				<Flex
					wd="335px"
					ht="26px"
					fw="600"
					fs="14"
					lh="26"
					jc="flex-start"
					mg="0 0 5px 0"
				>
					대표 뱃지 (최대 3개)
				</Flex>
				<Box variant="stTextArea" style={{ marginBottom: "26px" }}>
					<Box
						variant="textArea"
						type="text"
						style={{ fontSize: "16px", fontWeight: 400, color: "#C8C8C8" }}
					/>
				</Box>
			</Flex>
		</Flex>
	);
};

export default ProfileEdit;