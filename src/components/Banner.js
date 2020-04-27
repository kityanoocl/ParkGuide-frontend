import React, { Component } from "react";
import { Button, Typography, Row, Col } from 'antd';

import logo from '../img/banner.png'
const { Text } = Typography;
class Banner extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="formArea">
          {/* <SearchFilterForm /> */}
          <Row justify="space-between" align="middle">
            <Col span={12}>
              <img src={logo} alt="app loco" height="300px" />
            </Col>
            <Col height="100%" span={12}>
              <Row gutter={[0, 40]}>
                <Text>
                  Suppl. Table 4. Mouse circRNA summary
                  chr,start,end,strand: coordinates in mm10 annotation
                  Annotation: NTO: intergenic; CTO: complete transcript overlap; AS: antisense; ITO: incomplete transcript overlap; ncRNA: non-coding RNA; INTRONIC: intronic; CDS,5UTR,3UTR: overlaps coding sequence, 5'UTR or 3'UTR; ANNOTATED: splice sites are annotated; ALT_DONOR, ALT_ACCEPTOR: not annotated splice donor or acceptor site
                  nExons: number of exons
                  length: predicted length
                  rawCounts: raw counts of backsplice-spanning reads in all samples in the same order as the preceding column names
                  allSHAM,allTAC: detected in all SHAM_mock or all TAC_mock with >=3 reads
                  rnoCircIndex, hsaCircIndex: index of rat,human homolog, if found
                  Normalized sample counts are given as backsplice-spanning reads per million uniquely aligned unspliced reads (RPM)
                </Text>
              </Row>
              <Row justify="center">
                <Button className="resultButton" type="primary" style={{ borderRadius: "7px" }}>
                  Let's Search
                </Button>
              </Row>

            </Col>
          </Row>



        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
