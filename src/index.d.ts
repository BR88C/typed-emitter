/**
 * An event map for a typed event emitter.
 */
export type EventMap = {
    [key: string]: (...args: any[]) => void
}

/**
 * A typed event emitter.
 */
export class TypedEmitter<Events extends EventMap> {
    /**
     * @hidden
     */
    addListener: <K extends keyof Events>(event: K, listener?: Events[K]) => this;
    /**
     * @hidden
     */
    public static readonly captureRejectionSymbol: unique symbol;
    /**
     * @hidden
     */
    public static captureRejections: boolean;
    /**
     * @hidden
     */
    public static defaultMaxListeners: number;
    /**
     * @hidden
     */
    public emit: <K extends keyof Events>(event: K, ...args: Parameters<Events[K]>) => boolean;
    /**
     * @hidden
     */
    public static readonly errorMonitor: unique symbol;
    /**
     * @hidden
     */
    public eventNames: <K extends keyof Events>() => K[];
    /**
     * @hidden
     */
    public static getEventListeners: <T extends Record<string, any>, K extends keyof T>(emitter: TypedEmitter<T>, name: K) => Array<T[K]>;
    /**
     * @hidden
     */
    public getMaxListeners: () => number;
    /**
     * @hidden
     */
    public listenerCount: <K extends keyof Events>(event: K) => number;
    /**
     * @hidden
     */
    public static listenerCount: <T extends Record<string, any>, K extends keyof T>(emitter: TypedEmitter<T>, eventName: K) => number;
    /**
     * @hidden
     */
    public listeners: <K extends keyof Events>(event: K) => Array<Events[K]>;
    /**
     * @hidden
     */
    public off: <K extends keyof Events>(event: K, listener?: Events[K]) => this;
    /**
     * @hidden
     */
    public on: <K extends keyof Events>(event: K, listener?: Events[K]) => this;
    /**
     * @hidden
     */
    public static on: <T extends Record<string, any>, K extends keyof T>(emitter: TypedEmitter<T>, eventName: K, options?: { signal?: AbortSignal | undefined }) => AsyncIterableIterator<T[K]>;
    /**
     * @hidden
     */
    public once: <K extends keyof Events>(event: K, listener?: Events[K]) => this;
    /**
     * @hidden
     */
    public static once: <T extends Record<string, any>, K extends keyof T>(emitter: TypedEmitter<T>, eventName: K, options?: { signal?: AbortSignal | undefined }) => Promise<[T[K]]>;
    /**
     * @hidden
     */
    public prependListener: <K extends keyof Events>(event: K, listener?: Events[K]) => this;
    /**
     * @hidden
     */
    public prependOnceListener: <K extends keyof Events>(event: K, listener?: Events[K]) => this;
    /**
     * @hidden
     */
    public rawListeners: <K extends keyof Events>(event: K) => Array<Events[K]>;
    /**
     * @hidden
     */
    public removeAllListeners: <K extends keyof Events>(event?: K) => this;
    /**
     * @hidden
     */
    public removeListener: <K extends keyof Events>(event: K, listener?: Events[K]) => this;
    /**
     * @hidden
     */
    public setMaxListeners: (n: number) => this;
}
