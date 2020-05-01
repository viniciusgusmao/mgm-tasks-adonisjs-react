import React,{ useState } from 'react';
import Notification from 'components/Notification';
import Loading from 'components/Loading';
import { useHistory } from 'react-router-dom'

const BaseForm = ({children}) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const [paramsToast, setParamsToast] = useState({ description: '', type: '' });

  const execToast = (isToasty, description, type, currentPath) => {
    setToast(isToasty)
    setParamsToast({ description, type }) 
    setTimeout(() => {
      history.push(currentPath)
    }, 2000)
  }

  return (
    <>
       {toast && <Notification message={paramsToast.description} type={paramsToast.type} />}
       <Loading loading={loading} />
       {children((value) => setLoading(value), (isToasty, description, type, currentPath) => execToast(isToasty, description, type, currentPath))}
    </>
  );
}

export default BaseForm;
