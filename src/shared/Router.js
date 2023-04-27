import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lottie from "lottie-react";
import spinner from "../common/gif/spinner.json";
import { Flex } from "../common";
import SignInPage from "../pages/join/SignInPage";

const ProfilePage = lazy(() => import("../pages/profile/ProfilePage"));
const SignUpPage = lazy(() => import("../pages/join/SignUpPage"));
const TodoListPage = lazy(() => import("../pages/todoList/TodoListPage"));
const AddFeedPage = lazy(() => import("../pages/feed/AddFeedPage"));
const ProfileEditPage = lazy(() => import("../pages/profile/ProfileEditPage"));
const PasswordChangePage = lazy(() =>
	import("../pages/profile/PasswordChangePage"),
);
const FollowingPage = lazy(() => import("../pages/profile/FollowingPage"));
const FollowerPage = lazy(() => import("../pages/profile/FollowerPage"));
const DetailFeedPage = lazy(() => import("../pages/feed/DetailFeedPage"));
const FollowingFeedListPage = lazy(() =>
	import("../pages/feed/FollowingFeedListPage"),
);
const RecommendedFeedListPage = lazy(() =>
	import("../pages/feed/RecommendedFeedListPage"),
);
const FeedPage = lazy(() => import("../pages/feed/FeedPage"));
const InterestTagsPage = lazy(() =>
	import("../pages/profile/InterestTagsPage"),
);
const MyBadgesPage = lazy(() => import("../pages/profile/MyBadgesPage"));
const BadgeSetiingPage = lazy(() =>
	import("../pages/profile/BadgeSetiingPage"),
);
const ReactionListPage = lazy(() => import("../pages/feed/ReactionListPage"));
const MyFeedPage = lazy(() => import("../pages/profile/MyFeedPage"));
const EditFeedPage = lazy(() => import("../pages/feed/EditFeedPage"));
const EmailSignIn = lazy(() => import("../pages/join/EmailSignIn"));
const GoogleLogin = lazy(() => import("../pages/join/GoogleLogin"));
const KakaoLogin = lazy(() => import("../pages/join/KakaoLogin"));
const NaverLogin = lazy(() => import("../pages/join/NaverLogin"));
const SearchPage = lazy(() => import("../pages/search/SearchPage"));

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Suspense
					fallback={
						<Flex mg="0 0 50px 0" wd="100%" ht="100%">
							<Lottie animationData={spinner} />
						</Flex>
					}
				>
					<Routes>
						<Route path="/emailSignIn" element={<EmailSignIn />} />
						<Route path="/" element={<SignInPage />} />
						<Route path="/signup" element={<SignUpPage />} />
						<Route path="/api/members/login/kakao" element={<KakaoLogin />} />
						<Route path="/api/members/login/naver" element={<NaverLogin />} />
						<Route path="/api/members/login/google" element={<GoogleLogin />} />
						<Route path="profile/:id" element={<ProfilePage />} />
						<Route path="profile/edit" element={<ProfileEditPage />} />
						<Route
							path="profile/edit/password"
							element={<PasswordChangePage />}
						/>
						<Route path="profile/:id/badges" element={<MyBadgesPage />} />
						<Route
							path="profile/:id/badgeSetting"
							element={<BadgeSetiingPage />}
						/>
						<Route path="profile/:id/following" element={<FollowingPage />} />
						<Route path="profile/:id/follower" element={<FollowerPage />} />
						<Route
							path="profile/edit/interest"
							element={<InterestTagsPage />}
						/>
						<Route path="profile/:id/myblocks" element={<MyFeedPage />} />
						<Route path="todolist" element={<TodoListPage />} />
						<Route path="feed" element={<FeedPage />}>
							<Route path="following" element={<FollowingFeedListPage />} />
							<Route path="recommended" element={<RecommendedFeedListPage />} />
						</Route>
						<Route path="addFeed" element={<AddFeedPage />} />
						<Route path="feed/:id" element={<DetailFeedPage />} />
						<Route path="feed/reactionList" element={<ReactionListPage />} />
						<Route path="search" element={<SearchPage />} />
						<Route path="feedEdit/:id" element={<EditFeedPage />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</>
	);
};

export default Router;
