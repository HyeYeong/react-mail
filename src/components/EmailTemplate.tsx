import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { Container } from '@chakra-ui/react';
import { styled, ServerStyleSheet } from 'styled-components'
import juice from 'juice'
import { EmailHeading } from './EmailHeading';


export const EmailTemplate = ({ styles, title, content }: any) => {
    return (
      <Container>
        <head>
          {styles}
        </head>
        <EmailHeading title={title}/>
        <div>{content}</div>
      </Container>
    );
  };
