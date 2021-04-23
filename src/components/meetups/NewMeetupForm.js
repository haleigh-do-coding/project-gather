import { useRef } from 'react';
import classes from './NewMeetupForm.module.css';
import Card from '../UI/Card';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef ();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescrption = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            descrption: enteredDescrption,
        };


        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type='Text' required id='title' ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'> Related Picture (Click the right button to "Copy link address")</label>
                <input type='url' required id='image'  ref={imageInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Location (Address)</label>
                <input type='Text' required id='address'  ref={addressInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='description'> Describe your meetup </label>
                <textarea id='description' required rows='5'  ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
    );
}

export default NewMeetupForm;