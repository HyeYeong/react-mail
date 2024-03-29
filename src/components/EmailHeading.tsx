import { Heading } from '@chakra-ui/react';

type MailHeading = {
  title: string | JSX.Element;
};

export const EmailHeading = ({ title }: MailHeading): JSX.Element => (
  <th>
    {title}
  </th>
);
