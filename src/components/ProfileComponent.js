import React, {Component} from 'react';


class ProfileComponent extends Component{
    state = {
        selectedFile: null
    }

    handleSubmit = (evt) =>{
        //console.log(`You have fired the Submit function ${this.state.filename}`);
        let data = this.state.selectedFile;
        
        console.log(`hopefully the file object ${data.name}`)
        fetch(`http://localhost:4000/profile`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                data: data
            }
        })
        .then(res => console.log(`this is the response from the server for the file ${res}`))
        //console.log(`THis is the file: ${evt.target.file[0]}`)


    }

    fileChange = (evt) => {
        console.log(`this is the fileChange ${evt.target.files[0]}`)
       this.setState({
           selectedFile: evt.target.files[0]
       })

    }


    render(){
        return(
            <div className="container">

            <form className="form" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                <h3>Upload Profile Picture</h3>
                <br/>
                <br/>

                <input type="file" name="file" onChange={this.fileChange} />
                <br/>
                <br/>
                <input type="submit"  value="submit" />

            </form>
            
            </div>
        )
    }



}


export default ProfileComponent;