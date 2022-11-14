const Svg = ({ variant, onClick }) => {
	switch (variant) {
		// 휴지통 아이콘
		case "trashCan":
			return (
				<svg
					width="22"
					height="22"
					viewBox="0 0 22 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7.74138 19H14.2657C14.81 19 15.2478 18.844 15.5791 18.5321C15.9104 18.2249 16.0879 17.7972 16.1116 17.249L16.5943 7.04076H17.3753C17.5504 7.04076 17.6971 6.97932 17.8154 6.85645C17.9385 6.73357 18 6.5847 18 6.40984C18 6.23497 17.9385 6.08847 17.8154 5.97031C17.6971 5.85216 17.5504 5.79309 17.3753 5.79309H4.63185C4.45673 5.79309 4.30764 5.85453 4.18458 5.9774C4.06153 6.09555 4 6.2397 4 6.40984C4 6.5847 4.06153 6.73357 4.18458 6.85645C4.30764 6.97932 4.45673 7.04076 4.63185 7.04076H5.41278L5.89554 17.2561C5.9192 17.8043 6.09432 18.232 6.42089 18.5392C6.7522 18.8464 7.19236 19 7.74138 19ZM7.88337 17.7452C7.68458 17.7452 7.5213 17.6791 7.39351 17.5467C7.26572 17.4144 7.19709 17.2443 7.18763 17.0363L6.70487 7.04076H15.2738L14.8124 17.0363C14.8029 17.249 14.7343 17.4191 14.6065 17.5467C14.4787 17.6791 14.3154 17.7452 14.1166 17.7452H7.88337ZM8.91278 16.5968C9.0595 16.5968 9.17546 16.5543 9.26065 16.4692C9.35057 16.3841 9.39554 16.2707 9.39554 16.1289L9.17546 8.6996C9.17546 8.56255 9.13049 8.45148 9.04057 8.36642C8.95064 8.28135 8.83232 8.23881 8.6856 8.23881C8.53888 8.23881 8.42055 8.28371 8.33063 8.3735C8.2407 8.45857 8.19811 8.56964 8.20284 8.70669L8.41582 16.136C8.42055 16.2778 8.46788 16.3912 8.55781 16.4763C8.64773 16.5566 8.76606 16.5968 8.91278 16.5968ZM11 16.5968C11.1515 16.5968 11.2721 16.5543 11.3621 16.4692C11.4567 16.3841 11.5041 16.2731 11.5041 16.136V8.70669C11.5041 8.56964 11.4567 8.45857 11.3621 8.3735C11.2721 8.28371 11.1515 8.23881 11 8.23881C10.8533 8.23881 10.7326 8.28371 10.6379 8.3735C10.548 8.45857 10.503 8.56964 10.503 8.70669V16.136C10.503 16.2731 10.548 16.3841 10.6379 16.4692C10.7326 16.5543 10.8533 16.5968 11 16.5968ZM13.0943 16.5968C13.2363 16.5968 13.3523 16.5566 13.4422 16.4763C13.5321 16.3912 13.5794 16.2778 13.5842 16.136L13.7972 8.70669C13.8019 8.56964 13.7593 8.45857 13.6694 8.3735C13.5842 8.28371 13.4659 8.23881 13.3144 8.23881C13.1724 8.23881 13.0565 8.28135 12.9665 8.36642C12.8766 8.45148 12.8293 8.56491 12.8245 8.70669L12.6116 16.1289C12.6068 16.2707 12.6471 16.3841 12.7323 16.4692C12.8222 16.5543 12.9429 16.5968 13.0943 16.5968ZM7.77688 6.26097H9.09026V4.79353C9.09026 4.61394 9.14943 4.4698 9.26775 4.3611C9.38607 4.24767 9.54226 4.19096 9.73631 4.19096H12.2495C12.4483 4.19096 12.6068 4.24767 12.7252 4.3611C12.8435 4.4698 12.9026 4.61394 12.9026 4.79353V6.26097H14.216V4.72973C14.216 4.18624 14.0504 3.76326 13.7191 3.46079C13.3878 3.1536 12.9287 3 12.3418 3H9.64402C9.05713 3 8.59804 3.1536 8.26673 3.46079C7.94016 3.76326 7.77688 4.18624 7.77688 4.72973V6.26097Z"
						fill="#979797"
					/>
				</svg>
			);

		// 햄버거 아이콘
		case "hamburger":
			return (
				<svg
					width="24"
					height="25"
					viewBox="0 0 24 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect x="5" y="6.5" width="15" height="2" rx="1" fill="#C8C8C8" />
					<rect x="5" y="11.5" width="15" height="2" rx="1" fill="#C8C8C8" />
					<rect x="5" y="16.5" width="15" height="2" rx="1" fill="#C8C8C8" />
				</svg>
			);

		// 체크박스 아이콘
		case "checkBox":
			return (
				<svg
					width="24"
					height="25"
					viewBox="0 0 24 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						width="24"
						height="24"
						transform="translate(0 0.5)"
						fill="white"
					/>
					<rect
						x="2"
						y="3"
						width="20"
						height="20"
						rx="4"
						stroke="#C8C8C8"
						strokeWidth="2"
					/>
				</svg>
			);

		// addTodo 모달 오픈 아이콘
		case "addTodo":
			return (
				<svg
					onClick={onClick}
					cursor="pointer"
					width="70"
					height="70"
					viewBox="0 0 70 70"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g filter="url(#filter0_d_297_832)">
						<circle cx="33" cy="33" r="25" fill="#7474FF" />
					</g>
					<path
						d="M23 33C23 33.3744 23.1314 33.693 23.3943 33.9558C23.6571 34.2107 23.9717 34.3381 24.3381 34.3381H31.6619V41.6738C31.6619 42.0323 31.7933 42.3429 32.0562 42.6057C32.319 42.8686 32.6336 43 33 43C33.3744 43 33.693 42.8686 33.9558 42.6057C34.2186 42.3429 34.3501 42.0323 34.3501 41.6738V34.3381H41.6619C42.0283 34.3381 42.3429 34.2107 42.6057 33.9558C42.8686 33.693 43 33.3744 43 33C43 32.6336 42.8686 32.319 42.6057 32.0562C42.3429 31.7853 42.0283 31.6499 41.6619 31.6499H34.3501V24.3381C34.3501 23.9717 34.2186 23.6571 33.9558 23.3943C33.693 23.1314 33.3744 23 33 23C32.6336 23 32.319 23.1314 32.0562 23.3943C31.7933 23.6571 31.6619 23.9717 31.6619 24.3381V31.6499H24.3381C23.9717 31.6499 23.6571 31.7853 23.3943 32.0562C23.1314 32.319 23 32.6336 23 33Z"
						fill="white"
					/>
					<defs>
						<filter
							id="filter0_d_297_832"
							x="0"
							y="0"
							width="70"
							height="70"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dx="2" dy="2" />
							<feGaussianBlur stdDeviation="5" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_297_832"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_297_832"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
			);

		// 닫기 아이콘
		case "close":
			return (
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M0.355022 0.355022C0.828385 -0.118341 1.59586 -0.118341 2.06922 0.355022L8 6.2858L13.9308 0.355022C14.4041 -0.118341 15.1716 -0.118341 15.645 0.355022C16.1183 0.828385 16.1183 1.59586 15.645 2.06922L9.7142 8L15.645 13.9308C16.1183 14.4041 16.1183 15.1716 15.645 15.645C15.1716 16.1183 14.4041 16.1183 13.9308 15.645L8 9.7142L2.06922 15.645C1.59586 16.1183 0.828385 16.1183 0.355022 15.645C-0.118341 15.1716 -0.118341 14.4041 0.355022 13.9308L6.2858 8L0.355022 2.06922C-0.118341 1.59586 -0.118341 0.828385 0.355022 0.355022Z"
						fill="#979797"
					/>
				</svg>
			);

		// 메모 인풋 아이콘
		case "memo":
			return (
				<svg
					width="13"
					height="13"
					viewBox="0 0 13 13"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3.70312 13C3.86719 13 4.01953 12.957 4.16016 12.8711C4.30469 12.7891 4.47656 12.6602 4.67578 12.4844L6.67969 10.709H10.2246C10.8145 10.709 11.3125 10.5996 11.7188 10.3809C12.1289 10.1621 12.4414 9.84961 12.6562 9.44336C12.8711 9.0332 12.9785 8.53711 12.9785 7.95508V3.4082C12.9785 2.82617 12.8711 2.33203 12.6562 1.92578C12.4414 1.51562 12.1289 1.20117 11.7188 0.982422C11.3125 0.763672 10.8145 0.654297 10.2246 0.654297H2.75391C2.16406 0.654297 1.66406 0.763672 1.25391 0.982422C0.847656 1.20117 0.537109 1.51562 0.322266 1.92578C0.107422 2.33203 0 2.82617 0 3.4082V7.95508C0 8.53711 0.107422 9.0332 0.322266 9.44336C0.541016 9.84961 0.851562 10.1621 1.25391 10.3809C1.66016 10.5996 2.14648 10.709 2.71289 10.709H2.95312V12.1504C2.95312 12.4121 3.01758 12.6191 3.14648 12.7715C3.2793 12.9238 3.46484 13 3.70312 13ZM3.98438 11.7051V10.0352C3.98438 9.85938 3.94531 9.73633 3.86719 9.66602C3.79297 9.5918 3.67383 9.55469 3.50977 9.55469H2.7832C2.23242 9.55469 1.82227 9.41797 1.55273 9.14453C1.28711 8.86719 1.1543 8.45703 1.1543 7.91406V3.44336C1.1543 2.9043 1.28711 2.49805 1.55273 2.22461C1.82227 1.94727 2.23242 1.80859 2.7832 1.80859H10.1953C10.7461 1.80859 11.1543 1.94727 11.4199 2.22461C11.6895 2.49805 11.8242 2.9043 11.8242 3.44336V7.91406C11.8242 8.45703 11.6895 8.86719 11.4199 9.14453C11.1543 9.41797 10.7461 9.55469 10.1953 9.55469H6.62109C6.44141 9.55469 6.29688 9.57617 6.1875 9.61914C6.08203 9.6582 5.96875 9.74023 5.84766 9.86523L3.98438 11.7051ZM3.65625 6.55469C3.89844 6.55469 4.10352 6.46875 4.27148 6.29688C4.43945 6.125 4.52344 5.91992 4.52344 5.68164C4.52344 5.44336 4.43945 5.23828 4.27148 5.06641C4.10352 4.89453 3.89844 4.80859 3.65625 4.80859C3.41406 4.80859 3.20703 4.89453 3.03516 5.06641C2.86719 5.23828 2.7832 5.44336 2.7832 5.68164C2.7832 5.91992 2.86719 6.125 3.03516 6.29688C3.20703 6.46875 3.41406 6.55469 3.65625 6.55469ZM6.49219 6.55469C6.73047 6.55469 6.93555 6.46875 7.10742 6.29688C7.2793 6.125 7.36523 5.91992 7.36523 5.68164C7.36523 5.44336 7.2793 5.23828 7.10742 5.06641C6.93555 4.89453 6.73047 4.80859 6.49219 4.80859C6.25 4.80859 6.04297 4.89453 5.87109 5.06641C5.69922 5.23828 5.61328 5.44336 5.61328 5.68164C5.61328 5.91992 5.69922 6.125 5.87109 6.29688C6.04297 6.46875 6.25 6.55469 6.49219 6.55469ZM9.32227 6.55469C9.56445 6.55469 9.76953 6.46875 9.9375 6.29688C10.1094 6.125 10.1953 5.91992 10.1953 5.68164C10.1953 5.44336 10.1094 5.23828 9.9375 5.06641C9.76953 4.89453 9.56445 4.80859 9.32227 4.80859C9.08398 4.80859 8.87891 4.89453 8.70703 5.06641C8.53906 5.23828 8.45508 5.44336 8.45508 5.68164C8.45508 5.91992 8.53906 6.125 8.70703 6.29688C8.87891 6.46875 9.08398 6.55469 9.32227 6.55469Z"
						fill="#979797"
					/>
				</svg>
			);

		// 투두 없음 아이콘
		case "todoEmpty":
			return (
				<svg
					width="35"
					height="36"
					viewBox="0 0 35 36"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2.5 23V28C2.5 30.7614 4.73858 33 7.5 33H12.5V35.5H7.5C3.35787 35.5 0 32.1421 0 28V23H2.5ZM22.5 33V35.5H27.5C31.6421 35.5 35 32.1421 35 28V23H32.5V28C32.5 30.7614 30.2614 33 27.5 33H22.5ZM32.5 13H35V8C35 3.85786 31.6421 0.5 27.5 0.5H22.5V3H27.5C30.2614 3 32.5 5.23858 32.5 8V13ZM12.5 3H7.5C4.73858 3 2.5 5.23858 2.5 8V13H0V8C0 3.85787 3.35786 0.5 7.5 0.5H12.5V3Z"
						fill="#979797"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M25.5546 10.9776C26.1155 11.38 26.244 12.161 25.8416 12.7219L15.9792 26.4689C15.7563 26.7797 15.4032 26.9713 15.0211 26.9889C14.639 27.0066 14.2699 26.8483 14.0193 26.5593L7.85288 19.4496C7.40055 18.9281 7.45664 18.1386 7.97817 17.6863C8.49969 17.234 9.28916 17.2901 9.74149 17.8116L14.8707 23.7254L23.8102 11.2646C24.2127 10.7037 24.9936 10.5752 25.5546 10.9776Z"
						fill="#979797"
					/>
				</svg>
			);

		case "chevron":
			return (
				<svg
					onClick={onClick}
					width="24"
					height="24"
					viewBox="0 0 20 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0.771484 7.93945C0.771484 8.23242 0.898438 8.51562 1.12305 8.73047L7.55859 15.166C7.79297 15.3906 8.05664 15.498 8.32031 15.498C8.93555 15.498 9.375 15.0586 9.375 14.4727C9.375 14.1699 9.25781 13.9062 9.0625 13.7207L6.875 11.5039L3.98438 8.86719L6.26953 9.00391H18.1445C18.7793 9.00391 19.2285 8.56445 19.2285 7.93945C19.2285 7.30469 18.7793 6.875 18.1445 6.875H6.26953L3.99414 7.01172L6.875 4.375L9.0625 2.1582C9.25781 1.96289 9.375 1.69922 9.375 1.39648C9.375 0.810547 8.93555 0.380859 8.32031 0.380859C8.05664 0.380859 7.79297 0.478516 7.53906 0.722656L1.12305 7.14844C0.898438 7.35352 0.771484 7.64648 0.771484 7.93945Z"
						fill="black"
					/>
				</svg>
			);
		case "InputReset":
			return (
				<svg
					onClick={onClick}
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12 3C7.023 3 3 7.023 3 12C3 16.977 7.023 21 12 21C16.977 21 21 16.977 21 12C21 7.023 16.977 3 12 3ZM12 19.2C8.031 19.2 4.8 15.969 4.8 12C4.8 8.031 8.031 4.8 12 4.8C15.969 4.8 19.2 8.031 19.2 12C19.2 15.969 15.969 19.2 12 19.2ZM12 10.731L15.231 7.5L16.5 8.769L13.269 12L16.5 15.231L15.231 16.5L12 13.269L8.769 16.5L7.5 15.231L10.731 12L7.5 8.769L8.769 7.5L12 10.731Z"
						fill="#7474FF"
					/>
				</svg>
			);
		case "noShow":
			return (
				<svg
					onClick={onClick}
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12.3281 19.1328C13.0469 19.1328 13.737 19.0729 14.3984 18.9531C15.0599 18.8385 15.6901 18.6797 16.2891 18.4766L15.0469 17.2266C14.6198 17.3464 14.1797 17.4427 13.7266 17.5156C13.2786 17.5885 12.8125 17.625 12.3281 17.625C11.4948 17.625 10.6953 17.5234 9.92969 17.3203C9.16927 17.1172 8.45573 16.8464 7.78906 16.5078C7.1224 16.1693 6.51823 15.8021 5.97656 15.4062C5.4401 15.0052 4.97656 14.6094 4.58594 14.2188C4.19531 13.8229 3.89323 13.4609 3.67969 13.1328C3.47135 12.8047 3.36719 12.5495 3.36719 12.3672C3.36719 12.237 3.44792 12.0443 3.60938 11.7891C3.77083 11.5286 4.0026 11.2318 4.30469 10.8984C4.60677 10.5651 4.96875 10.2214 5.39062 9.86719C5.81771 9.50781 6.29948 9.16406 6.83594 8.83594L5.65625 7.65625C5.02083 8.0625 4.45052 8.49219 3.94531 8.94531C3.4401 9.39323 3.01302 9.83594 2.66406 10.2734C2.3151 10.7057 2.04948 11.1068 1.86719 11.4766C1.6849 11.8411 1.59375 12.138 1.59375 12.3672C1.59375 12.6328 1.71094 12.9844 1.94531 13.4219C2.1849 13.8542 2.52604 14.3255 2.96875 14.8359C3.41667 15.3411 3.95573 15.8464 4.58594 16.3516C5.22135 16.8568 5.9375 17.3203 6.73438 17.7422C7.53125 18.1589 8.39844 18.4948 9.33594 18.75C10.2786 19.0052 11.276 19.1328 12.3281 19.1328ZM12.3281 5.60938C11.6458 5.60938 10.9948 5.66406 10.375 5.77344C9.75521 5.88281 9.15885 6.03125 8.58594 6.21875L9.83594 7.46875C10.2318 7.35938 10.6354 7.27344 11.0469 7.21094C11.4583 7.14323 11.8854 7.10938 12.3281 7.10938C13.1615 7.10938 13.9583 7.21615 14.7188 7.42969C15.4844 7.64323 16.2005 7.92448 16.8672 8.27344C17.5339 8.61719 18.1354 8.99219 18.6719 9.39844C19.2135 9.80469 19.6797 10.2083 20.0703 10.6094C20.4609 11.0052 20.7604 11.3594 20.9688 11.6719C21.1823 11.9844 21.2891 12.2161 21.2891 12.3672C21.2891 12.5234 21.2109 12.7318 21.0547 12.9922C20.9036 13.2526 20.6849 13.5443 20.3984 13.8672C20.112 14.1849 19.7682 14.513 19.3672 14.8516C18.9661 15.1901 18.5156 15.5182 18.0156 15.8359L19.1797 17C19.7891 16.599 20.3333 16.1771 20.8125 15.7344C21.2969 15.2865 21.7057 14.8516 22.0391 14.4297C22.3724 14.0026 22.625 13.6094 22.7969 13.25C22.974 12.8906 23.0625 12.5964 23.0625 12.3672C23.0625 12.1016 22.9453 11.7526 22.7109 11.3203C22.4818 10.888 22.1458 10.4193 21.7031 9.91406C21.2604 9.40365 20.724 8.89583 20.0938 8.39062C19.4688 7.88542 18.7578 7.42448 17.9609 7.00781C17.1641 6.58594 16.2917 6.2474 15.3438 5.99219C14.401 5.73698 13.3958 5.60938 12.3281 5.60938ZM12.3281 16.5781C12.6302 16.5781 12.9219 16.5443 13.2031 16.4766C13.4896 16.4036 13.7604 16.3099 14.0156 16.1953L8.49219 10.6641C8.36719 10.9245 8.27083 11.1979 8.20312 11.4844C8.14062 11.7708 8.10938 12.0651 8.10938 12.3672C8.10938 12.9401 8.21615 13.4818 8.42969 13.9922C8.64844 14.4974 8.95052 14.9453 9.33594 15.3359C9.72135 15.7214 10.1693 16.026 10.6797 16.25C11.1901 16.4688 11.7396 16.5781 12.3281 16.5781ZM16.2266 13.875C16.3307 13.6458 16.4089 13.4036 16.4609 13.1484C16.5182 12.8932 16.5469 12.6328 16.5469 12.3672C16.5469 11.7839 16.4375 11.237 16.2188 10.7266C16 10.2161 15.6979 9.77083 15.3125 9.39062C14.9271 9.00521 14.4792 8.70573 13.9688 8.49219C13.4583 8.27344 12.9141 8.16406 12.3359 8.16406C12.0651 8.16406 11.8021 8.1901 11.5469 8.24219C11.2917 8.29427 11.0495 8.36979 10.8203 8.46875L16.2266 13.875ZM18.4922 19.2656C18.612 19.3906 18.7578 19.4531 18.9297 19.4531C19.1016 19.4583 19.2474 19.3958 19.3672 19.2656C19.4974 19.1354 19.5599 18.987 19.5547 18.8203C19.5547 18.6536 19.4922 18.5078 19.3672 18.3828L6.13281 5.15625C6.01823 5.03646 5.8724 4.97656 5.69531 4.97656C5.51823 4.97656 5.36979 5.03646 5.25 5.15625C5.13021 5.27604 5.07031 5.42448 5.07031 5.60156C5.07031 5.77344 5.13021 5.91927 5.25 6.03906L18.4922 19.2656Z"
						fill="#C8C8C8"
					/>
				</svg>
			);
		case "show":
			return (
				<svg
					onClick={onClick}
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12.3281 19.1328C13.3958 19.1328 14.401 19.0052 15.3438 18.75C16.2917 18.4948 17.1641 18.1589 17.9609 17.7422C18.7578 17.3203 19.4688 16.8568 20.0938 16.3516C20.724 15.8464 21.2604 15.3411 21.7031 14.8359C22.1458 14.3255 22.4818 13.8542 22.7109 13.4219C22.9453 12.9844 23.0625 12.6328 23.0625 12.3672C23.0625 12.1016 22.9453 11.7526 22.7109 11.3203C22.4818 10.888 22.1458 10.4193 21.7031 9.91406C21.2604 9.40365 20.724 8.89583 20.0938 8.39062C19.4688 7.88542 18.7552 7.42448 17.9531 7.00781C17.1562 6.58594 16.2865 6.2474 15.3438 5.99219C14.401 5.73698 13.3958 5.60938 12.3281 5.60938C11.2812 5.60938 10.2865 5.73698 9.34375 5.99219C8.40625 6.2474 7.53906 6.58594 6.74219 7.00781C5.94531 7.42448 5.22917 7.88542 4.59375 8.39062C3.95833 8.89583 3.41667 9.40365 2.96875 9.91406C2.52604 10.4193 2.1849 10.888 1.94531 11.3203C1.71094 11.7526 1.59375 12.1016 1.59375 12.3672C1.59375 12.6328 1.71094 12.9844 1.94531 13.4219C2.1849 13.8542 2.52604 14.3255 2.96875 14.8359C3.41667 15.3411 3.95573 15.8464 4.58594 16.3516C5.22135 16.8568 5.9375 17.3203 6.73438 17.7422C7.53125 18.1589 8.39844 18.4948 9.33594 18.75C10.2786 19.0052 11.276 19.1328 12.3281 19.1328ZM12.3281 17.625C11.4948 17.625 10.6953 17.5234 9.92969 17.3203C9.16927 17.1172 8.45573 16.8464 7.78906 16.5078C7.1224 16.1693 6.51823 15.8021 5.97656 15.4062C5.4401 15.0052 4.97656 14.6094 4.58594 14.2188C4.19531 13.8229 3.89323 13.4609 3.67969 13.1328C3.47135 12.8047 3.36719 12.5495 3.36719 12.3672C3.36719 12.2161 3.47135 11.9844 3.67969 11.6719C3.89323 11.3594 4.19531 11.0052 4.58594 10.6094C4.97656 10.2083 5.4401 9.80469 5.97656 9.39844C6.51823 8.99219 7.1224 8.61719 7.78906 8.27344C8.45573 7.92448 9.16927 7.64323 9.92969 7.42969C10.6953 7.21615 11.4948 7.10938 12.3281 7.10938C13.1615 7.10938 13.9583 7.21615 14.7188 7.42969C15.4792 7.64323 16.1927 7.92448 16.8594 8.27344C17.526 8.61719 18.1302 8.99219 18.6719 9.39844C19.2135 9.80469 19.6797 10.2083 20.0703 10.6094C20.4609 11.0052 20.7604 11.3594 20.9688 11.6719C21.1823 11.9844 21.2891 12.2161 21.2891 12.3672C21.2891 12.5495 21.1823 12.8047 20.9688 13.1328C20.7604 13.4609 20.4609 13.8229 20.0703 14.2188C19.6797 14.6094 19.2135 15.0052 18.6719 15.4062C18.1302 15.8021 17.526 16.1693 16.8594 16.5078C16.1927 16.8464 15.4792 17.1172 14.7188 17.3203C13.9583 17.5234 13.1615 17.625 12.3281 17.625ZM12.3359 16.5781C12.9141 16.5781 13.4583 16.4688 13.9688 16.25C14.4792 16.026 14.9271 15.7214 15.3125 15.3359C15.6979 14.9453 16 14.4974 16.2188 13.9922C16.4375 13.4818 16.5469 12.9401 16.5469 12.3672C16.5469 11.7839 16.4375 11.237 16.2188 10.7266C16 10.2161 15.6979 9.77083 15.3125 9.39062C14.9271 9.00521 14.4792 8.70573 13.9688 8.49219C13.4583 8.27344 12.9141 8.16406 12.3359 8.16406C11.7422 8.16406 11.1901 8.27344 10.6797 8.49219C10.1693 8.70573 9.72135 9.00521 9.33594 9.39062C8.95052 9.77083 8.64844 10.2161 8.42969 10.7266C8.21615 11.237 8.10938 11.7839 8.10938 12.3672C8.10938 12.9401 8.21875 13.4818 8.4375 13.9922C8.65625 14.4974 8.95833 14.9453 9.34375 15.3359C9.72917 15.7214 10.1745 16.026 10.6797 16.25C11.1901 16.4688 11.7422 16.5781 12.3359 16.5781ZM12.3281 13.7344C11.9479 13.7344 11.625 13.599 11.3594 13.3281C11.0938 13.0573 10.9609 12.737 10.9609 12.3672C10.9609 11.9922 11.0938 11.6719 11.3594 11.4062C11.625 11.1406 11.9479 11.0078 12.3281 11.0078C12.7031 11.0078 13.0234 11.1406 13.2891 11.4062C13.5599 11.6719 13.6953 11.9922 13.6953 12.3672C13.6953 12.737 13.5599 13.0573 13.2891 13.3281C13.0234 13.599 12.7031 13.7344 12.3281 13.7344Z"
						fill="#7474FF"
					/>
				</svg>
			);
		case "alert":
			return (
				<svg
					width="14"
					height="14"
					viewBox="0 0 14 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM6.3 10.5V9.1H7.7V10.5H6.3ZM6.3 3.5V7.7H7.7V3.5H6.3Z"
						fill="#7474FF"
					/>
				</svg>
			);
		// 프로필 세팅 아이콘
		case "Setting":
			return (
				<svg
					width="24"
					height="23"
					viewBox="0 0 24 23"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					style={{ marginTop: "30px", cursor: "pointer" }}
				>
					<path
						d="M10.9644 22.251H13.0459C13.4697 22.251 13.8354 22.1313 14.1431 21.8921C14.4507 21.6528 14.6523 21.3281 14.748 20.918L15.1685 19.103L15.4351 19.0107L17.0142 19.9746C17.3696 20.2002 17.7422 20.2856 18.1318 20.231C18.5283 20.1831 18.877 20.0088 19.1777 19.708L20.6133 18.2827C20.9141 17.9751 21.0884 17.6265 21.1362 17.2368C21.1909 16.8472 21.1055 16.4746 20.8799 16.1191L19.8955 14.5503L19.998 14.2939L21.8027 13.8735C22.2061 13.771 22.5273 13.5659 22.7666 13.2583C23.0127 12.9438 23.1357 12.5781 23.1357 12.1611V10.1411C23.1357 9.72412 23.0127 9.3584 22.7666 9.04395C22.5273 8.72949 22.2061 8.52441 21.8027 8.42871L20.0186 7.99805L19.9058 7.72119L20.8901 6.15234C21.1157 5.80371 21.2012 5.43457 21.1465 5.04492C21.0986 4.65527 20.9243 4.30664 20.6235 3.99902L19.188 2.56348C18.894 2.2627 18.5488 2.08838 18.1523 2.04053C17.7627 1.98584 17.3901 2.06787 17.0347 2.28662L15.4556 3.26074L15.1685 3.14795L14.748 1.33301C14.6523 0.929688 14.4507 0.608398 14.1431 0.369141C13.8354 0.123047 13.4697 0 13.0459 0H10.9644C10.5405 0 10.1714 0.123047 9.85693 0.369141C9.54932 0.608398 9.34766 0.929688 9.25195 1.33301L8.83154 3.14795L8.54443 3.26074L6.96533 2.28662C6.60986 2.06787 6.2373 1.98584 5.84766 2.04053C5.45801 2.08838 5.11279 2.2627 4.81201 2.56348L3.37646 3.99902C3.06885 4.30664 2.89111 4.65527 2.84326 5.04492C2.79541 5.43457 2.88428 5.80371 3.10986 6.15234L4.09424 7.72119L3.9917 7.99805L2.19727 8.42871C1.78711 8.53125 1.4624 8.73975 1.22314 9.0542C0.983887 9.36182 0.864258 9.72412 0.864258 10.1411V12.1611C0.864258 12.5781 0.983887 12.9438 1.22314 13.2583C1.46924 13.5728 1.79395 13.7778 2.19727 13.8735L4.01221 14.2939L4.10449 14.5503L3.12012 16.1191C2.89453 16.4746 2.80566 16.8472 2.85352 17.2368C2.90137 17.6265 3.0791 17.9751 3.38672 18.2827L4.82227 19.708C5.12305 20.0088 5.46826 20.1831 5.85791 20.231C6.25439 20.2856 6.63037 20.2002 6.98584 19.9746L8.55469 19.0107L8.83154 19.103L9.25195 20.918C9.34766 21.3281 9.54932 21.6528 9.85693 21.8921C10.1714 22.1313 10.5405 22.251 10.9644 22.251ZM11.2207 20.395C11.0498 20.395 10.9507 20.3164 10.9233 20.1592L10.3184 17.6367C9.99707 17.5615 9.68262 17.4624 9.375 17.3394C9.07422 17.2095 8.79736 17.0659 8.54443 16.9087L6.32959 18.2725C6.20654 18.3545 6.0835 18.3374 5.96045 18.2212L4.86328 17.1343C4.76074 17.0317 4.75049 16.9087 4.83252 16.7651L6.19629 14.5605C6.05957 14.3076 5.92627 14.0342 5.79639 13.7402C5.6665 13.4395 5.56055 13.125 5.47852 12.7969L2.95605 12.2021C2.79883 12.1748 2.72021 12.0791 2.72021 11.915V10.377C2.72021 10.2197 2.79883 10.124 2.95605 10.0898L5.47852 9.48486C5.55371 9.14307 5.65967 8.81836 5.79639 8.51074C5.93311 8.20312 6.05957 7.93994 6.17578 7.72119L4.82227 5.5166C4.7334 5.37305 4.74365 5.24316 4.85303 5.12695L5.9502 4.05029C6.06641 3.94775 6.19287 3.93408 6.32959 4.00928L8.53418 5.34229C8.7666 5.20557 9.04004 5.07227 9.35449 4.94238C9.67578 4.80566 10.0005 4.69629 10.3286 4.61426L10.9233 2.0918C10.9507 1.93457 11.0498 1.85596 11.2207 1.85596H12.7896C12.9536 1.85596 13.0459 1.93457 13.0664 2.0918L13.6816 4.63477C14.0166 4.7168 14.3311 4.82275 14.625 4.95264C14.9258 5.07568 15.2026 5.20898 15.4556 5.35254L17.6602 4.00928C17.8037 3.93408 17.9336 3.95117 18.0498 4.06055L19.1367 5.12695C19.2529 5.24316 19.2632 5.37305 19.1675 5.5166L17.814 7.72119C17.937 7.93994 18.0635 8.20312 18.1934 8.51074C18.3301 8.81836 18.4395 9.14307 18.5215 9.48486L21.0439 10.0898C21.2012 10.124 21.2798 10.2197 21.2798 10.377V11.915C21.2798 12.0791 21.2012 12.1748 21.0439 12.2021L18.5112 12.8071C18.436 13.1284 18.3335 13.4395 18.2036 13.7402C18.0806 14.041 17.9473 14.3145 17.8037 14.5605L19.1572 16.7549C19.2461 16.9053 19.2358 17.0283 19.1265 17.124L18.0396 18.2212C17.9165 18.3374 17.79 18.3511 17.6602 18.2622L15.4556 16.9087C15.2026 17.0659 14.9292 17.2095 14.6353 17.3394C14.3413 17.4624 14.0234 17.5615 13.6816 17.6367L13.0664 20.1592C13.0459 20.3164 12.9536 20.395 12.7896 20.395H11.2207ZM12 15.022C12.7178 15.022 13.3706 14.8477 13.9585 14.499C14.5464 14.1504 15.0146 13.6787 15.3633 13.084C15.7119 12.4893 15.8862 11.8364 15.8862 11.1255C15.8862 10.4146 15.7119 9.76514 15.3633 9.17725C15.0146 8.58936 14.5464 8.12109 13.9585 7.77246C13.3706 7.42383 12.7178 7.24951 12 7.24951C11.2891 7.24951 10.6362 7.42383 10.0415 7.77246C9.45361 8.12109 8.98193 8.58936 8.62646 9.17725C8.27783 9.76514 8.10352 10.4146 8.10352 11.1255C8.10352 11.8433 8.27783 12.4961 8.62646 13.084C8.98193 13.6719 9.45361 14.1436 10.0415 14.499C10.6362 14.8477 11.2891 15.022 12 15.022ZM12 13.2583C11.6104 13.2583 11.2549 13.1626 10.9336 12.9712C10.6123 12.7798 10.356 12.5234 10.1646 12.2021C9.97314 11.8809 9.87744 11.522 9.87744 11.1255C9.87744 10.7358 9.97314 10.3838 10.1646 10.0693C10.356 9.74805 10.6123 9.4917 10.9336 9.30029C11.2549 9.10889 11.6104 9.01318 12 9.01318C12.3828 9.01318 12.7349 9.10889 13.0562 9.30029C13.3774 9.4917 13.6304 9.74805 13.8149 10.0693C14.0063 10.3838 14.1021 10.7358 14.1021 11.1255C14.1021 11.5151 14.0063 11.8706 13.8149 12.1919C13.6304 12.5132 13.3774 12.7729 13.0562 12.9712C12.7349 13.1626 12.3828 13.2583 12 13.2583Z"
						fill="#979797"
					/>
				</svg>
			);
		case "rightArrow":
			return (
				<svg
					width="5"
					height="9"
					viewBox="0 0 5 9"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					style={{ marginTop: "3px", cursor: "pointer" }}
				>
					<path
						d="M5 4.49746C5 4.40937 4.98363 4.32806 4.95088 4.25353C4.91814 4.179 4.86902 4.10785 4.80354 4.04009L0.977407 0.167702C0.869352 0.0559006 0.735102 0 0.574656 0C0.469876 0 0.373281 0.0271033 0.284872 0.08131C0.196464 0.132129 0.126064 0.201581 0.0736739 0.289667C0.024558 0.377753 0 0.477696 0 0.589497C0 0.74873 0.0589391 0.891022 0.176817 1.01637L3.62475 4.49746L0.176817 7.97854C0.0589391 8.1039 0 8.24788 0 8.4105C0 8.51892 0.024558 8.61717 0.0736739 8.70525C0.126064 8.79673 0.196464 8.86787 0.284872 8.91869C0.373281 8.9729 0.469876 9 0.574656 9C0.735102 9 0.869352 8.94241 0.977407 8.82722L4.80354 4.95483C4.86902 4.88707 4.91814 4.81592 4.95088 4.74139C4.98363 4.66685 5 4.58555 5 4.49746Z"
						fill="#131313"
					/>
				</svg>
			);
		default:
			break;
	}
};

export default Svg;
