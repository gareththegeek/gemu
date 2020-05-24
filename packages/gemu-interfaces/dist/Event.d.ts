declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
declare type Event<T> = DeepPartial<T>;
export default Event;
