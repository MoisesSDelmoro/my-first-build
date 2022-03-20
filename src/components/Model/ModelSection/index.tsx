import React, { ReactNode, FC, HTMLAttributes } from 'react';

import { Container } from './styles';

interface Props extends HTMLAttributes<HTMLDivElement> {
  modelName: string
  overlayNode: ReactNode
}

const ModelSection: FC<Props> = ({ modelName, overlayNode, children, ...props }) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}

export default ModelSection
