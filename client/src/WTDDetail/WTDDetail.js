import Toolbar from "./Toolbar";
import WTDItemList from "./WTDItemList";
import WTDDetailProvider from "./WTDDetailProvider";
import Footer from "./Footer";

function WTDDetail() {
  return (
    <div>
      <WTDDetailProvider>
        <Toolbar />
        <Footer />
        <WTDItemList />
      </WTDDetailProvider>
    </div>
  );
}

export default WTDDetail;
