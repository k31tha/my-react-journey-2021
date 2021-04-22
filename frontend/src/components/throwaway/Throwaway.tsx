import * as React from 'react';

type AppProps = {
  message: string;
}; /* use `interface` if exporting so that consumers can extend */

const Throwaway = ({message}: AppProps): JSX.Element => <div>{message}</div>;

// annotating return type with JSX.Element

export default Throwaway;
