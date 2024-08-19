# QuakeSense

QuakeSense 是一个利用多个数据源提供全球地震通知的应用程序。

核心功能：

1. 全球主流数据源，包含：美国地质调查局（USGS）、欧洲地中海地震中心（EMSC）、中国地震台网中心（CEIC）、日本气象厅（JMA）、台湾中央气象局（CWB）等；
2. 地震数据可视化，并提供地震详情；
3. 服务器端的地震通知，可以实现全球地震通知，无需打开 app；
4. 原生 Swift UI 应用程序，无广告，无隐私问题。交互简单，易于使用。

地震预警：

目前最为可行的地震预警方案，是利用电波比地震波快的原理。即当地震发生后，因为距离用户有一定距离，地震波传播速度比电波慢，可以利用这个时间差，提前通知用户。

但是，这需要各环节的延时足够低，但是目前的技术无法做到足够低延时：

1. 测试站收到地震波信号，存在延迟；
2. 收到信号后，需要计算震源位置，传输到数据中心，存在延迟；
3. 根据用户位置信息，计算与震源的距离，存在延迟；
4. 不同地区的地质构造，导致地震波传播速度不同，需要独立计算，存在延迟；
5. 通过 APNs 服务向大规模用户推送消息，存在延迟。

所有这些延迟加起来，可能会超过地震波传播的时间，导致有效的地震预警几乎不可能在 app 端实现。

所有，QuakeSense 采用的是全球地震通知，即当地震发生后，服务器端会向可能受到影响的用户推送消息，无需打开 app，即可收到地震通知。
