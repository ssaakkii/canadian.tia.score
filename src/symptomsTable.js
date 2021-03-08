import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import ScoreCard from './scoreCard';

export default class dataTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedData : [
        { id: 1, category:'Crinical Findings', points: 2, isSelected: false },
        { id: 2, category:'Crinical Findings', points: 2, isSelected: false },
        { id: 3, category:'Crinical Findings', points: 2, isSelected: false },
        { id: 4, category:'Crinical Findings', points: 3, isSelected: false },
        { id: 5, category:'Crinical Findings', points: 1, isSelected: false },
        { id: 6, category:'Crinical Findings', points: 1, isSelected: false },
        { id: 7, category:'Crinical Findings', points: -3, isSelected: false },
        { id: 8, category:'Crinical Findings', points: 3, isSelected: false },
        { id: 9, category:'Crinical Findings', points: 1, isSelected: false },
        { id: 10, category:'Investigations in the ED', points: 2, isSelected: false },
        { id: 11, category:'Investigations in the ED', points: 1, isSelected: false },
        { id: 12, category:'Investigations in the ED', points: 2, isSelected: false },
        { id: 13, category:'Investigations in the ED', points: 3, isSelected: false },
      ],
      score : 0,
    };

    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleClinicalFindingsSelectionModel = this.handleClinicalFindingsSelectionModel.bind(this);
    this.handleInvestigationsInTheEDSelectionModel = this.handleInvestigationsInTheEDSelectionModel.bind(this);
  }

  // checkbox の状態が変更されたときの処理
  handleCheckbox(newSelection) {
    this.setState(prevState => (
      {selectedData: prevState.selectedData.map(
        obj => (obj.id === newSelection.data.id ? Object.assign(obj, { isSelected: newSelection.isSelected }) : obj)
      )}
    ));
    this.setState((state) => (
      {score: this.state.selectedData.filter(item => {
        return item.isSelected === true;
      }).reduce((p, x) => p + x.points, 0)}
    ));
  };

  // ClinicalFindings の selectionModel の状態が変更されたときの処理
  handleClinicalFindingsSelectionModel(selectionModel) {

    // すべて選択解除の場合
    if(selectionModel.selectionModel.length === 0){
      this.setState(prevState => (
        {selectedData: prevState.selectedData.map(
          obj => (obj.category === 'Crinical Findings' ? Object.assign(obj, { isSelected: false }) : obj)
        )}
      ));
      this.setState((state) => (
        {score: this.state.selectedData.filter(item => {
          return item.isSelected === true;
        }).reduce((p, x) => p + x.points, 0)}
      ));
    }

    // すべて選択の場合
    if(selectionModel.selectionModel.length === 9){
      this.setState(prevState => (
        {selectedData: prevState.selectedData.map(
          obj => (obj.category === 'Crinical Findings' ? Object.assign(obj, { isSelected: true }) : obj)
        )}
      ));
      this.setState((state) => (
        {score: this.state.selectedData.filter(item => {
          return item.isSelected === true;
        }).reduce((p, x) => p + x.points, 0)}
      ));
    }
  };

  // Investigations in the ED の selectionModel の状態が変更されたときの処理
  handleInvestigationsInTheEDSelectionModel(selectionModel) {

    // すべて選択解除の場合
    if(selectionModel.selectionModel.length === 0){
      this.setState(prevState => (
        {selectedData: prevState.selectedData.map(
          obj => (obj.category === 'Investigations in the ED' ? Object.assign(obj, { isSelected: false }) : obj)
        )}
      ));
      this.setState((state) => (
        {score: this.state.selectedData.filter(item => {
          return item.isSelected === true;
        }).reduce((p, x) => p + x.points, 0)}
      ));
    }

    // すべて選択の場合
    if(selectionModel.selectionModel.length === 4){
      this.setState(prevState => (
        {selectedData: prevState.selectedData.map(
          obj => (obj.category === 'Investigations in the ED' ? Object.assign(obj, { isSelected: true }) : obj)
        )}
      ));
      this.setState((state) => (
        {score: this.state.selectedData.filter(item => {
          return item.isSelected === true;
        }).reduce((p, x) => p + x.points, 0)}
      ));
    }
  };

  clinicalFindingsColumns = [
    { field: 'id', headerName: 'ID', width: 70 ,sortable: false},
    { field: 'titleEn', headerName: 'Clinical Findings (en)', width: 300 ,sortable: false},
    { field: 'titleJa', headerName: 'Clinical Findings (ja)', width: 300 ,sortable: false},
    { field: 'points', type: 'number', headerName: 'points', width: 100 ,sortable: false},
  ];

  clinicalFindingsRows = [
    { id: 1, titleEn: 'First TIA (in lifetime)', titleJa: '初回の TIA 発作', points: 2 },
    { id: 2, titleEn: 'Symptoms ≧ 10 minutes', titleJa: '症状持続時間 ≧ 10分', points: 2 },
    { id: 3, titleEn: 'Past History of Carotid Stenosis', titleJa: '頸動脈狭窄の既往', points: 2 },
    { id: 4, titleEn: 'Already on Antiplatelet Therapy', titleJa: '抗血小板療法をされている', points: 3 },
    { id: 5, titleEn: 'History of Gait Disturbance', titleJa: '歩行障害', points: 1 },
    { id: 6, titleEn: 'History of Unilateral Weakness', titleJa: '片麻痺', points: 1 },
    { id: 7, titleEn: 'History of Vertigo', titleJa: '回転性めまい', points: -3 },
    { id: 8, titleEn: 'Initial Triage Diastolic BP ≧ 110 mmhG', titleJa: '拡張期血圧 ≧ 110 mmHg', points: 3 },
    { id: 9, titleEn: 'Dysrthria or Aphasis (History of Physical)', titleJa: '構音障害 or 失語', points: 1 },
  ];

  investigationsInTheEDColumns = [
    { field: 'id', headerName: 'ID', width: 70 ,sortable: false},
    { field: 'titleEn', headerName: 'investigations in the ED (en)', width: 300 ,sortable: false},
    { field: 'titleJa', headerName: 'investigations in the ED (ja)', width: 300 ,sortable: false},
    { field: 'points', type: 'number', headerName: 'points', width: 100 ,sortable: false},
  ];

  investigationsInTheEDRows = [
    { id: 10, titleEn: 'Atrial Fibrillation on ECG', titleJa: 'EGC での心房細動波形', points: 2 },
    { id: 11, titleEn: 'Infarction (mew or old) on CT', titleJa: 'CT での梗塞巣所見', points: 1 },
    { id: 12, titleEn: 'Platelet count ≧ 400 × 10^9 /L', titleJa: '血小板 ≧ 40 万/L', points: 2 },
    { id: 13, titleEn: 'Clucose ≧ 15 mmol/L', titleJa: '血糖値 ≧ 270 mg/dl', points: 3 },
  ];

  render() { 
    return (
      <div>
        <ScoreCard score={this.state.score} risk={this.state.risk} riskPercentage={this.state.riskPercentage}/>
        <br />
        <p>Please select the symptoms.</p>
        <h3>Clinical Findings</h3>
        <div style={{ width: "100%" }}>
         <DataGrid 
          autoHeight
          rows={this.clinicalFindingsRows}
          columns={this.clinicalFindingsColumns} 
          hideFooter={true}
          checkboxSelection
          onRowSelected={this.handleCheckbox}
          onSelectionModelChange={this.handleClinicalFindingsSelectionModel}
        />
        </div>
        <h3>Investigations in the ED</h3>
        <div style={{ width: "100%" }}>
         <DataGrid 
           autoHeight
           rows={this.investigationsInTheEDRows} 
           columns={this.investigationsInTheEDColumns} 
           hideFooter={true}
           checkboxSelection 
           onRowSelected={this.handleCheckbox}
           onSelectionModelChange={this.handleInvestigationsInTheEDSelectionModel}
          />
        </div>
        <p><small>※ This site does not take any responsibility for the result.</small></p>
      </div>
    );
  };
 

}

