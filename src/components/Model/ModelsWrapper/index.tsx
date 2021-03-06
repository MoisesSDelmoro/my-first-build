import ModelsContext, { CardModel } from 'components/Model/ModelsContext'
import React, { useCallback, useRef, useState } from 'react'
import ModelOverlay from 'components/Model/ModelOverlay'
import { Container, OverlaysRoot } from './styles'

const ModelsWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModels, setRegisteredModels] = useState<CardModel[]>([])

  const registerModel = useCallback((model: CardModel) => {
    setRegisteredModels(state => [...state, model])
  }, [])

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels(state => state.filter(model => model.modelName !== modelName))
  }, [])

  const getModelByName = useCallback((modelName: string) => {
    return registeredModels.find(item => item.modelName === modelName) || null
  }, [registeredModels])

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName,
      }}>
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredModels.map(item => (
            <ModelOverlay key={item.modelName}>
              {item.modelName}
            </ModelOverlay>
          ))}
        </OverlaysRoot>
        {children}
      </Container>
    </ModelsContext.Provider>
  )
}

export default ModelsWrapper
