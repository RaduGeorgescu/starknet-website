import ReactMarkdown from "react-markdown";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import {
  UnorderedList,
  OrderedList,
  ListItem,
  Img,
  Box,
} from "src/libs/chakra-ui";

interface Props {
  readonly body: string;
}

// @ts-expect-error
export async function MarkdownBlock({ body }: Props): JSX.Element {
  return (
    <Box>
      <ReactMarkdown
        components={{
          h2: (props) => (
            <Heading as="h2" color="heading-navy-fg" variant="h3" {...props} />
          ),
          h3: (props) => (
            <Heading
              color="heading-navy-fg"
              pb={4}
              as="h3"
              variant="h3"
              {...props}
            />
          ),
          h4: (props) => (
            <Heading color="heading-navy-fg" as="h4" variant="h4" {...props} />
          ),
          h5: (props) => (
            <Heading color="heading-navy-fg" as="h5" variant="h4" {...props} />
          ),
          h6: (props) => (
            <Heading color="heading-navy-fg" as="h6" variant="h6" {...props} />
          ),
          p: (props) => (
            <Text
              pt={2}
              pb={4}
              lineHeight="32px"
              variant="baseRegular"
              {...props}
            />
          ),
          ul: (props) => <UnorderedList pl={1} mb={4} {...props} />,
          ol: (props) => <OrderedList mb={4} pl={1} {...props} />,
          li: (props) => <ListItem lineHeight="32px" {...props} />,
          img: (props) => <Img my="40px" borderRadius="8px" {...props} />,
        }}
      >
        {body}
      </ReactMarkdown>
    </Box>
  );
}