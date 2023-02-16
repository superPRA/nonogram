export type glob = {
    screen: {
      width: number,
      height: number,
    },
    animation: {
      frameRate: number, // per sec
    },
    time: {
      currentTime: number,
    },
    clock: ()=>void,
  };