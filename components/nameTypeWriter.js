import Typewriter from "typewriter-effect"

export default function Name(){
    return (
        <Typewriter
            options={
                {
                    autoStart: true,
                    loop: true
                }
            }
            onInit={(typewriter) => {
                typewriter
                    .typeString('GuntxJakka')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('Gunt')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('Jakkaphat')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('gxjakkap')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('GuntFuPanda')
                    .pauseFor(1000)
                    .deleteAll()
                    .start()
            }} />
    )
}