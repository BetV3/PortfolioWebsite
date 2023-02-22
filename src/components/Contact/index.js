import './index.scss'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_5b01jnt',
                'template_5f5v3xj',
                refForm.current,
                'al-8TJwbM215pa4Th'
            )
            .then(
                () => {
                    alert("Message successfully sent!")
                    window.location.reload(false)
                },
                () => {
                    alert("Failed to send the message, please try again")
                }
            )
    }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        Contact Me
                    </h1>
                    <p>
                        I am intereseted in job opportunities
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" placeholder="Subject" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required>
                                    </textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Elvis R,
                    <br />
                    Plano,
                    <br />
                    Texas <br />
                    <span>elvisramirez999@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[44.96, 19.61]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[44.96, 19.61]}>
                            <Popup>I live here :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    )
}

export default Contact