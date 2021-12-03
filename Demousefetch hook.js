import React from "react";
import {useFetch} from "react-fetch-hook";
const App =()=>{
    const {isLoading,data }=useFetch("https://mail.google.com/mail/u/0/#starred/FMfcgxwLtkdQGHpPPbLMtSRmVwfNdgKm");
    return isLoading ?(
        <div>Loading...</div>
    ) :(
        < Userprofile {...data} />
    );
};
export default App;