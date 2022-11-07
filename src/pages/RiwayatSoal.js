import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function RiwayatSoal() {
    return (
        <div class="container-fluid" style={{ backgroundColor: "#fbeeeb" }}>
        <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
  {/* As a link */}
  <nav className="navbar bg-danger rounded-bottom h5">
    <div
      className=" mx-auto text-center font-weight-bold"
      style={{ width: 200 }}
    >
      <u>Riwayat</u>
      <div className="row">
        <div className="col">
          <a href="/riwayat/materi" className="text-dark">
            Materi
          </a>
        </div>
        <div href="/riwayat/materi" className="col">
          <u>
            <a href="/riwayat/soal" className="text-dark">
              Soal
            </a>
          </u>
        </div>
      </div>
    </div>
  </nav>
  {/* body */}
  
  <button
    type="button"
    className="btn btn-light btn-lg btn-block rounded text-left"
    style={{ width: "100%", textAlign: "Left", marginTop: "10px"}}
  >
    <div className="h5">
      <i className="fa fa-book" aria-hidden="true" />
      Try Out
      <p className="h6" style={{ marginLeft: 26 }}>
        UTBK
      </p>
    </div>
  </button>
  <br />
  <button
    type="button"
    className="btn btn-light btn-lg btn-block rounded text-left"
    style={{ width: "100%", textAlign: "Left" , marginTop: "10px"}}
  >
    <div className="h5">
      <i className="fa fa-clock-o" aria-hidden="true" />
      Tumbuhan
      <p className="h6" style={{ marginLeft: 26 }}>
        Biologi
      </p>
    </div>
  </button>
  {/* footer */}
  {/* footer */}
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div className="mt-4 p-5 bg-white">
    <div className="row text-center">
      <div className="col">
        <i className="fa fa-home fa-2x" aria-hidden="true" />
      </div>
      <div className="col">
        <i
          style={{ textDecoration: "underline" }}
          className="fa fa-history fa-2x"
          aria-hidden="true"
        />
      </div>
      <div className="col">
        <i className="fa fa-book fa-2x" aria-hidden="true" />
      </div>
      <div className="col">
        <i className="fa fa-user fa-2x" aria-hidden="true" />
      </div>
    </div>
  </div>
  {/* Optional JavaScript */}
  {/* jQuery first, then Popper.js, then Bootstrap JS */}
</div>

    )
}