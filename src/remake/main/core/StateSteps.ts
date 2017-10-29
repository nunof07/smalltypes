import { Function } from '@main/system/function/index';

/**
 * Available state steps.
 */
export type StateSteps = {
    /**
     * First function called when state starts.
     */
    initialize?: Function<void, void>;

    /**
     * Called after {@link load}.
     */
    create?: Function<void, void>;

    /**
     * Called after {@link initialize}. Can be used for loading assets.
     */
    load?: Function<void, void>;

    /**
     * Called after {@link create} and every time during the core loop.
     */
    update?: Function<void, void>;
};
