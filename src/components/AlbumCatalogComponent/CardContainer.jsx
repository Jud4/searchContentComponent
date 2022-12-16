import Card from "./Card";

const CardContainer = ({albumsList}) => {
    return (
      <div className="container">
        <div className="row">
          {albumsList.map((album) => (
            <div className="col" key={album.id}>
              <Card albumData={album} />
            </div>
          ))}
        </div>
      </div>
      );
};

export default CardContainer;