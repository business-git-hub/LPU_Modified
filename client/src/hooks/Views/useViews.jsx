import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMonthlyViews, getVisitorIPs, trackVisit } from "../../stores/actions/viewsActions";

const useViews = () => {
    const dispatch = useDispatch();
    const { monthlyViews, visitorIPs, loading, error } = useSelector((state) => state.views);

    useEffect(() => {
        dispatch(trackVisit()); // Track visit on site load
        dispatch(getMonthlyViews());
        dispatch(getVisitorIPs());
    }, [dispatch]);

    return { monthlyViews, visitorIPs, loading, error };
};

export default useViews;
