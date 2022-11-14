import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavigationBar from "../components/NavigationBar";
import { useParams } from 'react-router-dom';

export default function Explore() {

    let { mapel } = useParams();

    var dataMTK = [
        {
            nama: "Trigonometri",
            tipe: "MTK",
            icon: "fa fa-pie-chart"
        },
        {
            nama: "Trigonometri 2",
            tipe: "MTK",
            icon: "fa fa-pie-chart"
        },
        {
            nama: "Trigonometri 3",
            tipe: "MTK",
            icon: "fa fa-pie-chart"
        },
    ]

    var dataBio = [
        {
            nama: "Sel hewan",
            tipe: "Biologi",
            icon: "fa fa-pie-chart"
        },
        {
            nama: "Tumbuhan",
            tipe: "Biologi",
            icon: "fa fa-pie-chart"
        },
        {
            nama: "Hewan",
            tipe: "Biologi",
            icon: "fa fa-pie-chart"
        },
    ]
    var dataFis = [
        {
            nama: "Daya",
            tipe: "Fisika",
            icon: "fa fa-pie-chart"
        },
        {
            nama: "Hukum Newton",
            tipe: "Fisika",
            icon: "fa fa-pie-chart"
        },
        {
            nama: "Momentum",
            tipe: "Fisika",
            icon: "fa fa-pie-chart"
        },
    ]

    function page(data){
        var listData;
        if(data=="fisika"){
            listData = dataFis;
        } else if(data == "biologi"){
            listData = dataBio;
        } else if(data == "matematika"){
            listData = dataMTK;
        } else {
            listData = [{
                nama:"",
                tipe:"",
                icon:""
            }]
        }
        return(
            listData.map(({nama, tipe, icon}) => {
                return(
                    <a href="/materi">
                  <div class="tombol">
                  <button
                    type="button"
                    className="btn btn-light btn-lg btn-block rounded text-left"
                    style={{ width: "100%", textAlign: "Left" , marginTop: "10px"}}
                  >
                    <div className="h5" style={{display:"flex", flexDirection:"row"}}>
                      <i className={icon} aria-hidden="true" />
                      <div>
                      <p style={{marginLeft:"10px", marginBottom:0}}>{nama}</p>
                      <p className="h6" style={{marginLeft:"10px", marginBottom:0  }}>
                        {tipe}
                      </p>
                      </div>
                    </div>
                  </button>
                  </div>
                  </a>
                )
              })
        )
    }

    return(
        <div class="container-fluid" style={{minHeight:"100vh", backgroundColor: "#fbeeeb"}}>
            <NavigationBar />
            <div class="row">
                <div class="col-md-12">
                <h3>Materi {mapel}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                {page(mapel)}
                </div>
            </div>
        </div>
    )
}