import './ContactUsPage.css';

export default function ContactUsPage() {
    return (
        <>
            <div className="container contact-us-page" style={{ paddingTop: 50 }}>
                <h1 className="contact-us-heading">Contact Us</h1>
                <form>
                    <textarea placeholder="Type your message"></textarea>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </>
    );
}