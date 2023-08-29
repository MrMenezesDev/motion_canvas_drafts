import { Spline, Grid, Layout, Txt, makeScene2D } from '@motion-canvas/2d';
import { all, createRef, easeInElastic } from '@motion-canvas/core';
import { espiral } from '@services/espiral';

export default makeScene2D(function* (view) {
  const titulo = createRef<Txt>();
  const grid = createRef<Grid>();
  const base = createRef<Layout>();
  const curva = createRef<Spline>();

  view.add(
    <>
      <Layout ref={base} width={view.width} height={view.height} >
        <Txt ref={titulo} text="Espiral" fontSize={100} fill={"#FFF"} />
        <Grid
          ref={grid}
          width={'60%'}
          height={'60%'}
          stroke={'#666'}
          start={0}
          end={0}
        >
          <Spline
            ref={curva}
            lineWidth={1}
            stroke={'lightseagreen'}
            smoothness={0}
            end={0}
            points={espiral([
              [-250, 0],
              [0, 250],
              [250, 0],
              [0, -250],
            ])}
          />,
        </Grid>
      </Layout>
    </>
    ,);
  yield* titulo().position({ x: 0, y: (-grid().absolutePosition().y / 2) - 150 }, easeInElastic(1));
  grid().start(0).end(1);
  curva().position({ x: 0, y: 260 }, easeInElastic(1));
  yield* all(
    curva().end(1, 2),
  );


});