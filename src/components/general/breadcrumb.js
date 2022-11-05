import {useLocation, useParams, } from "react-router-dom";
import {useNavigate} from "react-router";
import arrow from "../../assets/image/general/arr.svg"
import arrow2  from "../../assets/image/general/arr2.svg"
import {useTranslation} from "react-i18next";


export const BreadCrumb = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {pathname} = location
    const {t} = useTranslation();

    return (
        <div className='pt-[52px] mb-8'>
            {pathname && (
                <>
                <div className='text-lg font-medium text-grey sm:text-base xs:text-sm'>
                    {pathname === '/direction/1' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("business")}</span> : null}
                    {pathname === '/direction/2' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("medicine")}</span> : null}
                    {pathname === '/direction/3' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("sport")}</span> : null}
                    {pathname === '/grants' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("grants")}<img src={arrow} alt="" className="arrow"/>{t("allGrants")}</span> : null}
                    {pathname === '/grants/:id' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("grants")}<img src={arrow} alt="" className="arrow"/>{t("allGrants")}</span> : null}
                    {pathname === '/trainings' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("traning")}<img src={arrow} alt=""className="arrow"/>{t("allTraning")}</span> : null}
                    {pathname === '/college' ? <span className="crumbs text-white" onClick={() => navigate(-1)}>{t("college")}<img src={arrow2} alt="" className="arrow"/>{t("allCollege")}</span> : null}
                    {pathname === '/university' ? <span className="crumbs text-white" onClick={() => navigate(-1)}>{t("univer")}<img src={arrow2} alt="" className="arrow"/>{t("allUniver")}</span> : null}

                    {pathname === '/u' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("coordination")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("university")}</span> : null}


                    {pathname === '/news' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("news")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("allNews")}</span> : null}
                    {pathname === '/events' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("events")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("allEvents")}</span> : null}
                </div>
                <div className='text-lg font-medium text-white' onClick={() => navigate(-1)}>
                    {pathname === '/ministry' ?  <span className="crumbs" onClick={() => navigate(-1)}>{t("about")}<img src={arrow2} alt="" className="mx-4 w-2 h-4 "/>{t("ministry")}</span> : null}
                </div>
                </>
            )}
        </div>
    );
};