import * as React from 'react';
import {Stream} from "./types";
import {defaultStream} from "./marks";

interface TakeProps {
  stream: Stream;
}

export const streamContext = React.createContext(defaultStream);

export const ImportedStream: React.FC<TakeProps> = ({stream, children, ...props}) => {
  if (process.env.NODE_ENV !== 'development') {
    if ('takeUID' in props) {
      throw new Error('react-imported-component: `takeUID` was replaced by `stream`.')
    }
  }
  
  return (
    <streamContext.Provider value={stream}>
      {children}
    </streamContext.Provider>
  )
};

export const UIDConsumer = streamContext.Consumer;
