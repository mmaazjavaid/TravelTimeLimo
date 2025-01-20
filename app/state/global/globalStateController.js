import { hookStateController } from '../hookStateController';
import { globalInitialState, globalState } from './globalState';

const globalStateControllerHandler = state => ({
    // setLayerLoading: (type, value) => {
    //     if (value !== globalState.layerLoading.get()[type]) {
    //         globalState.layerLoading.set({
    //             ...globalState.layerLoading.get(),
    //             [type]: value,
    //         });
    //     }
    // },
});

export const globalStateController = {
    ...globalStateControllerHandler(globalState),
    ...hookStateController(globalState, globalInitialState),
};
