import React, { useEffect } from 'react';

function KommunicateChat(){
    useEffect(() => {
        (function (d,m){
            var kommunicateSettings = {
                appId: "3739d56620ac0349bf89e5eab4b23942a",
                popupWidget: true,
                automaticChatOpenOnNavigation: false,   
            };
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(s);
            window.kommunicate = m; 
            m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    },[]);
    return <div></div>;
}
export default KommunicateChat;