# Analytics

---

#### 1.Get Id google analytics

- Create a [Google account](https://marketingplatform.google.com/about/analytics/)
- Find your [Google analytics](https://support.google.com/analytics/answer/1008080?hl=en) ID.
- Copy Tracking code ID to `.env`(example: UA-16061xxxx-1)

#### 2.Tracking

**A.Tracking Page Views**

```js
import { useLocation } from 'react-router-dom';
import track from '~/utils/analytics';

// ----------------------------------------------------------------------

function PageExampleView() {
  const { pathname } = useLocation();

  useEffect(() => {
    track.pageView({
      page_path: pathname
    });
  }, []);

  return <div>Page Content</div>;
}
```

**A.Tracking Page Actions**

```js
import track from '~/utils/analytics';

// ----------------------------------------------------------------------

function ShopView() {
  const handleAddtoCart = () => {
    track.event('add_to_cart');
    // Some Actions
  };

  return (
    <div>
      Product
      <Button onClick={handleAddtoCart}>Add to Cart</Button>
    </div>
  );
}
```
