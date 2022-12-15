const Card = ({ albumData }) => {
    if(albumData.imageCover==""){
        albumData.imageCover = "https://cdn.iconscout.com/icon/free/png-256/album-sign-music-disc-player-31716.png";
    }
    
    return (
      <div className="card m-2 mb-3" style="width: 18rem;">
        <img
          src={albumData.imageCover}
          className="card-img-top"
          alt="..."
          width="150"
          height="150"
        />
        <div className="card-body">
            <h6>{albumData.price}</h6>
            <h4 className="card-title">{albumData.albumName}</h4>
            <p className="card-text"><b>ARTIST:</b> {songInfo.artistName}</p>
        </div>
      </div>
    );
  };
  
  export default Card;