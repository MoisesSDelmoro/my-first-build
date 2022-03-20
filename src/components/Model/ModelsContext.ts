import React, { createContext } from 'react'

export interface CardModel {
    modelName: string
    overlayNode: React.ReactNode
    sectionRef: React.RefObject<HTMLElement>
}

interface ModelsContext {
    wrapperRef: React.RefObject<HTMLElement>
    registeredModels: CardModel[]
    registerModel: (model: CardModel) => void
    unregisterModel: (modelName: string) => void
    getModelByName: (modelName: string) => CardModel | null
}

export default createContext<ModelsContext>({} as ModelsContext)