import React, { useEffect, useState } from 'react';
import * as QRCode from 'qrcode';

interface Props {
  url: string
}

function QRCodeSpiral({url}: Props) {
  const [image, setImage] = useState<string>("")

  useEffect(() => {
    const setImageUrl = async () => {
      setImage(await QRCode.toDataURL(url, {width: 500}))
    }

    setImageUrl()
  }, [url]);

  return (<img src={image}/>);
};

export default QRCodeSpiral;