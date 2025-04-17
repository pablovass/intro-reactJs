type Props= {image: string;}



export const RandomFox =({image}:Props) : JSX.Element => {

   // const image: string = `https://randomfox.ca/images/${getRandomNumber()}.jpg`;
    return (
        <img width={320} height="auto" src={image}  alt="random fotos" className="rounded" />
    );
}

