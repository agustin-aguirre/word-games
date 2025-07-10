import chalkboardTexture from "../../../../assets/chalkboard-texture.svg";

function ChalkboardPanel({opacity, children}) {
    return (
        <div className="rounded-2xl shadow-2xl bg-emerald-800 relative text-white ">
            <div
                className={`rounded-2xl absolute inset-0 bg-cover bg-repeat pointer-events-none`}
                style={{ backgroundImage: `url(${chalkboardTexture})`, opacity: `${opacity ?? 40}%` }}
            ></div>
            <div className="relative z-10 text-white cabin-sketch-regular">
                {children}
            </div>
        </div>
  );
}


export default ChalkboardPanel;