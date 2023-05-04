import React from 'react';

export default function About(props) {

    //const [myStyle, setMyStyle] = useState({
    //   color: "black",
    // backgroundColor: "white",

    //})
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042744',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'

    }



    return (
        <div className="container">
            <h1 className="my-3" style={{
                color: props.mode === 'dark' ? 'white' : '#042744'
            }}>About Us</h1>
            < div className="accordion" id="accordionExample">
                <div className="accordion-item ">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Introduction TextUtils</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            this app is a simple example of how to use React to create a text converter that can handle common text manipulations such as changing the case of the text, reversing the text, and counting the number of words in the text

                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>How TextUtils Work</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This app was built using React, a popular JavaScript library for building user interfaces. The app also uses JavaScript string manipulation methods.If you're interested in learning how to build a text converter app using React, this project is a great place to start. You can use it as a starting point to build your own text manipulation tools or as a reference for learning React and JavaScript string methods.

                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            The app is designed to be easy to use and user-friendly. It's suitable for anyone who needs to convert text quickly and efficiently, such as writers, editors, and students. With Text Converter, you can easily convert text to suit your needs without having to manually edit the text yourself.

                        </div>
                    </div>
                </div>
                <div className="container my-3"></div>

            </div>
        </div >
    )
}

