import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Materi.css"

export default function Materi() {
    return (
        <>
        <div class="container-fluid" style={{ backgroundColor: "rgb(250, 219, 216)" }}>
        <script src =  "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <div className="jt jumbotron-fluid fw-bold">
            <div
            className=" text-center position-relative top-50 start-50 translate-middle"
            style={{ backgroundColor: "black", marginRight: 1000 }}
            >
            <p>Fisika</p>
            </div>
        </div>
        <div className="text-center fw-semibold" style={{ fontSize: 70 }}>
            <p>Hukum Newton Dan Penerapannya</p>
            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1scecjMJwq8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br />
        </div>
        <div
            className="position-relative bg-light text-center"
            style={{ margin: "15px 30px 0px 30px" }}
        >
            <div className="d-grid gap-2">
            <p>Hukum Newton ke-3 beserta contoh penerapannya</p>
            <button className="btn btn-secondary" type="button">
                Kuis
            </button>
            <button className="btn btn-secondary" type="button">
                Forum Diskusi
            </button>
            <br />
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <style
            dangerouslySetInnerHTML={{
            __html:
                "\n            .jumbo{\n                margin:15px 30px 0px 30px;\n                border-radius:10px;\n                background: \n            linear-gradient(\n                rgba(0, 0, 0, 0), \n                rgba(0, 0, 0, 0)\n            ),\n            url({logo}fisika.jpg);\n            background-repeat: repeat;\n            background-attachment: fixed;\n            height:340px;\n            font-size: 100px;\n            color: white;\n            }\n        "
            }}
        />
        </div>
        </>

    )

}