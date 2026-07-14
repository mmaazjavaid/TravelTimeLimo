import { hookStateController } from '../hookStateController';
import { globalInitialState, globalState, BOOKING_STATE_STORAGE_KEY } from './globalState';

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
    // Overrides the base reset so a completed/abandoned booking also clears
    // the persisted copy — otherwise the next refresh would restore the old
    // booking's data right back.
    reset: () => {
        globalState.set({ ...globalInitialState });
        if (typeof window !== 'undefined') {
            try {
                window.sessionStorage.removeItem(BOOKING_STATE_STORAGE_KEY);
            } catch (e) {
                // sessionStorage unavailable (private browsing etc.) — nothing to clean up.
            }
        }
    },
};
