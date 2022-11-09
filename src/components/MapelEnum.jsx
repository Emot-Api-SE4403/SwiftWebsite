import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';

const iconMapel = {
    mtk: <CalculateOutlinedIcon />,
    bio: <BiotechOutlinedIcon />,
    kimia: <ScienceOutlinedIcon />,
    fisika: <WbIncandescentOutlinedIcon />,
    bahasa: <ClassOutlinedIcon />,
    other: <ScheduleOutlinedIcon />
}


export function Mapel(jenis){
    switch(jenis){
        case "Matematika":
            return(iconMapel.mtk)
        case "Biologi":
            return(iconMapel.bio)
        case "Kimia":
            return(iconMapel.kimia)
        case "Fisika":
            return(iconMapel.fisika)
        case "Bahasa Indonesia":
            return(iconMapel.bahasa)
        default:
            return(iconMapel.other)
    }
}