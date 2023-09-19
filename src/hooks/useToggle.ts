import {useCallback, useState} from 'react';

type UseToggleHook = {
  toggle: boolean;
  handler: () => void;
};

const useToggle = (initialState = false): UseToggleHook => {
  const [toggle, setOpen] = useState<boolean>(initialState);

  const handler = useCallback(() => {
    setOpen(!toggle);
  }, [toggle]);

  return {toggle, handler};
};

export default useToggle;
