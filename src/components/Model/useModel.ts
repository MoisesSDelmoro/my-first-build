import { useCallback, useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useModel(modelName: string) {
    const { registerModel , unregisterModel, getModelByName } = useContext(
        ModelsContext
    )

    useEffect(() => {
        return () => unregisterModel(modelName)
    }, [modelName, unregisterModel])

    // Outra forma de escrever o mesmo useEffect
    // useEffect(() => () => unregisterModel(modelName), [modelName, unregisterModel])

    const getModel = useCallback(() => {
        return () => getModelByName(modelName)
    }, [getModelByName, modelName])

    return { registerModel, getModel}
}