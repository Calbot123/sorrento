import '../styles/Contact.css'

export function Contact( props ){
    return(
        <div className="contact">
            <h2>Contact</h2>
            <form 
            id="contact-form" 
            action="https://example.com/handler"
            method="post"
            >
                {/* name */}
                <label htmlFor="name"> Name</label>
                <input id="name" name="name" type="text" placeholder="Your Name" />
                {/* email */}
                <label htmlFor="email"> E-mail</label>
                <input id="email" name="email" type="email" placeholder="you@domain.com" />
                {/* message */}
                <label htmlFor= "message">Message </label>
                <textarea id="message" rows="5" cols="25" placeholder="Hey, how are you?"></textarea>
                {/* <button type="reset" >Clear</button> */}
                <button type="submit" >Send</button>
            </form>
        </div>
    )
}
export default Contact