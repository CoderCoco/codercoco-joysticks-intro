import React, { useEffect, useState } from 'react';
import * as QR from 'qrcode';

interface Props {
  url: string
}

function QrCode({url}: Props) {
  const [image, setImage] = useState<string>("")

  useEffect(() => {
    const setImageUrl = async () => {
      setImage(await QR.toDataURL(url, {width: 500}))
    }

    setImageUrl()
  }, [url]);

  return (<img className='qr-code' src={image}/>);
};

export default QrCode;