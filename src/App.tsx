import './styles/main.sass';
import {Header} from "./components/Header/Header";
import {Price} from "./components/Price/Price";
import {ClothingProduction} from "./components/ClothingProduction/ClothingProduction";
import {ProductionTechnologies} from "./components/ProductionTechnologies/ProductionTechnologies";
import {WorkScheme} from "./components/WorkScheme/WorkScheme";
import {InfoBlock} from "./components/InfoBlock/InfoBlock";
import {Collaboration} from "./components/Collaboration/Collaboration";

export const App = () => {
    return (
        <>
            <Header/>
            <Price/>
            <ClothingProduction/>
            <ProductionTechnologies/>
            <WorkScheme/>
            <InfoBlock/>
            <Collaboration/>
        </>
    )
}
