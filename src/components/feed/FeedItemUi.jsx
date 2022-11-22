import { Box, Flex } from "../../common";

const FeedItemUi = ({ children, feedColor }) => {
	return (
		<Flex dir="column" wd="100%" ht="193px" cursor="pointer">
			<Flex jc="center" gap="62px">
				<Box feedColor={feedColor} variant="feedItemHead" />
				<Box feedColor={feedColor} variant="feedItemHead" />
			</Flex>
			<Box feedColor={feedColor} variant="feedItemBody">
				{children}
			</Box>
		</Flex>
	);
};

export default FeedItemUi;
