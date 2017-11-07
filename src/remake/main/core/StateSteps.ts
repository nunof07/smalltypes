import { Function } from '@main/system/function/index';

/**
 * Available state steps.
 */
export type StateSteps = {
    /**
     * First function called when state starts.
     */
    readonly initialize?: Function<void, void>;

    /**
     * Called after {@link load}.
     */
    readonly create?: Function<void, void>;

    /**
     * Called after {@link initialize}. Can be used for loading assets.
     */
    readonly load?: Function<void, void>;

    /**
     * Called after {@link create} and every time during the core loop.
     */
    readonly update?: Function<void, void>;
};
