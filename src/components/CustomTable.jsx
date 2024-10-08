import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Medicine_1 from '../assets/Medicine_1.svg';
import Medicine_2 from '../assets/Medicine_2.svg';
import Medicine_3 from '../assets/Medicine_3.svg';
import Medicine_4 from '../assets/Medicine_4.svg';
import Medicine_5 from '../assets/Medicine_5.svg';
import Medicine_6 from '../assets/Medicine_6.svg';
import UpArrow from '../assets/UpArrow.svg';
import DownArroww from '../assets/DownArroww.svg';

// Styled table cell for customization
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#ffffff', // Set head cells to white
    color: 'black', // Change text color to black for visibility
    fontWeight: '500',
    fontSize: '15px',
    border: '1px solid #ddd', // Add border for head cells\
    padding: '12px 10px',
    boxSizing: 'border-box'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: '#ffffff', // Set body cells to white
    border: '1px solid #ddd', // Add border for body cells
  },
}));

// Styled table row for customization
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover, // Keep odd rows with hover effect
  },
  '&:last-child td, &:last-child th': {
    border: '1px solid #ddd', // Add separation for the last row
  },
}));

const data = {
  'GlaxoSmithKline Pharmaceuticals': [
    {
      sno: {
        value: 1,
        profit: 'up',
        percent: '+2',
      }, company: {
        imgSrc: Medicine_1,
        altValue: 'GlaxoSmithKline Pharmaceuticals',
        name: 'Shingrix',
        desc: 'Chronic rhinosinusitis with nasal polyps (CRSwNP)',
      }, revenue23: {
        value: '3,400',
        curr: ' Euro Million',
        profit: 'up',
        percent: '+17',
      }, revenue22: {
        value: '11,789',
        curr: ' Euro Million',
      }, approved: {
        imgSrc: null,
        name: '',
        desc: ''
      }, rd: {
        value: '1'
      }
    },
    {
      sno: {
        value: 2,
        profit: null,
        percent: null,
      }, company: {
        imgSrc: Medicine_1,
        altValue: 'GlaxoSmithKline Pharmaceuticals',
        name: 'Trelegy Ellipta',
        desc: 'HER2+ Adjuvant Breast Cancer (CompassHER2 RD)',
      }, revenue23: {
        value: '22,00',
        curr: 'Euro Million',
        profit: 'up',
        percent: '+29',
      }, revenue22: {
        value: '1,705',
        curr: 'Euro Million',
      }, approved: {
        imgSrc: Medicine_6,
        name: 'COVID_19 Vaccine',
        desc: 'COVID-19 Infection (in collaboration with BioNTech) (U.S. - 5 - 11 years of age)'
      }, rd: {
        value: '1'
      }
    }, {
      sno: {
        value: 3,
        profit: null,
        percent: null,
      }, company: {
        imgSrc: Medicine_1,
        altValue: 'GlaxoSmithKline Pharmaceuticals',
        name: 'Dovato',
        desc: 'Active immunization for the prevention of varicella in individuals 12 months of age and older',
      }, revenue23: {
        value: '12,206',
        curr: '$ Dollar Million',
        profit: 'up',
        percent: '+33',
      }, revenue22: {
        value: '11,789',
        curr: '$ Dollar Million',
      }, approved: {
        imgSrc: null,
        name: 'marstacimab (PF-06741086) (Hemophilia (Biologic)',
        desc: 'FAST TRACK - U.S., ORPHAN - U.S., E.U.)'
      }, rd: {
        value: '1'
      }
    },
  ],
  'Pfizer': [
    {
      sno: {
        value: 1,
        profit: null,
        percent: null,
      }, company: {
        imgSrc: Medicine_6,
        altValue: 'Pfizer',
        name: 'Comirnaty',
        desc: 'Active immunization to prevent COVID-19 disease caused by SARS-CoV-2 in individuals 12 years and older',
      }, revenue23: {
        value: '11,220',
        curr: '$ Dollar Million',
        profit: 'down',
        percent: '-70',
      }, revenue22: {
        value: '37,806',
        curr: '$ Dollar Million',
      }, approved: {
        imgSrc: null,
        name: '',
        desc: ''
      }, rd: {
        value: ''
      }
    },
    {
      sno: {
        value: 2,
        profit: null,
        percent: null,
      }, company: {
        imgSrc: Medicine_6,
        altValue: 'Pfizer',
        name: 'Eliquis',
        desc: 'Secondary Stroke Prevention',
      }, revenue23: {
        value: '12,206',
        curr: '$ Dollar Million',
        profit: 'up',
        percent: '+4',
      }, revenue22: {
        value: '11,789',
        curr: '$ Dollar Million',
      }, approved: {
        imgSrc: Medicine_6,
        altValue: 'Pfizer',
        name: 'marstacimab (PF-06741086) (Hemophilia (Biologic)',
        desc: 'FAST TRACK - U.S., ORPHAN - U.S., E.U.)'
      }, rd: {
        value: '1'
      }
    }
  ],
  'Bristol Myers Squibb': [
    {
      sno: {
        value: 1,
        profit: 'up',
        percent: '+2',
      }, company: {
        imgSrc: Medicine_4,
        altValue: '',
        name: 'Bristol Myers Suibb',
        name2: 'Eliquis',
        desc: 'Secondary Stroke Prevention',
      }, revenue23: {
        value: '12,206',
        curr: '$ Dollar Million',
        profit: 'up',
        percent: '+4',
      }, revenue22: {
        value: '11,789',
        curr: '$ Dollar Million',
      }, approved: {
        imgSrc: Medicine_6,
        name: 'marstacimab (PF-06741086) (Hemophilia (Biologic)',
        desc: 'FAST TRACK - U.S., ORPHAN - U.S., E.U.)'
      }, rd: {
        value: '1'
      }
    },
    {
      sno: {
        value: 2,
        profit: null,
        percent: null,
      }, company: {
        imgSrc: Medicine_4,
        altValue: '',
        name: 'Bristol Myers Suibb',
        name2: 'Opdivo',
        desc: 'Respiratory syncytial virus prophylaxis in adult population 18-49 years of age at increased risk',
      }, revenue23: {
        value: '12,206',
        curr: '$ Dollar Million',
        profit: 'up',
        percent: '+9',
      }, revenue22: {
        value: '8,249',
        curr: '$ Dollar Million',
      }, approved: {
        imgSrc: Medicine_1,
        name: 'GSK3844766 RSV vaccine',
        desc: 'Respiratory syncytial virus prophylaxis in older adult population 50-59 years of age at increased risk'
      }, rd: {
        value: '1'
      }
    }, {
      sno: {
        value: 3,
        profit: null,
        percent: null,
      }, company: {
        imgSrc: Medicine_4,
        altValue: '',
        name: 'Bristol Myers Suibb',
        name2: 'Orencia',
        desc: 'metastatic castration-resistant prostate cancer (mCRPC)',
      }, revenue23: {
        value: '3,601',
        curr: '$ Dollar Million',
        profit: 'up',
        percent: '+4',
      }, revenue22: {
        value: '3,464',
        curr: '$ Dollar Million',
      }, approved: {
        imgSrc: null,
        name: '',
        desc: ''
      }, rd: {
        value: '1'
      }
    }
  ],
  'Roche': [
    {
      sno: {
        value: 1,
        profit: 'up',
        percent: '+2',
      }, company: {
        imgSrc: Medicine_5,
        altValue: '',
        name: 'Ocrevus',
        desc: '1L HER2+ Metastatic Colorectal Cancer (MOUNTAINEER-03)',
      }, revenue23: {
        value: '6,031',
        curr: 'Fr. CHF Million',
        profit: 'up',
        percent: '+6',
      }, revenue22: {
        value: '6,031',
        curr: 'Fr. CHF Million',
      }, approved: {
        imgSrc: null,
        name: '',
        desc: ''
      }, rd: {
        value: '1'
      }
    },
    {
      sno: {
        value: 2,
        profit: null,
        percent: null,
      }, company: {
        imgSrc: Medicine_5,
        altValue: '',
        name: 'Hemlibra',
        desc: 'spinal muscular atrophy (SMA) pediatric <2 months',
      }, revenue23: {
        value: '4,147',
        curr: 'Fr. CHF Million',
        profit: 'up',
        percent: '+8',
      }, revenue22: {
        value: '3,823',
        curr: 'Fr. CHF Million',
      }, approved: {
        imgSrc: null,
        name: '',
        desc: ''
      }, rd: {
        value: '1'
      }
    }, {
      sno: {
        value: 3,
        profit: 'up',
        percent: '-2',
      }, company: {
        imgSrc: Medicine_5,
        altValue: '',
        name: 'Perjeta',
        desc: 'Obstructive Hypertrophic Cardiomyopathy',
      }, revenue23: {
        value: '3,768',
        curr: 'Fr. CHF Million',
        profit: 'down',
        percent: '-8',
      }, revenue22: {
        value: '4,087',
        curr: 'Fr. CHF Million',
      }, approved: {
        imgSrc: null,
        name: '',
        desc: ''
      }, rd: {
        value: '1'
      }
    }
  ],
  'Novo Nordisk': [
    {
      sno: {
        value: 1,
        profit: 'up',
        percent: '+2',
      }, company: {
        imgSrc: Medicine_3,
        altValue: 'Novo Nordisk',
        name: 'Ozempic',
        desc: '- Improves glycemic control in adults with type 2 diabetes mellitus.- Reduces the risk of major adverse cardiovascular events in adults with type 2 diabetes mellitus and established cardiovascular disease.- Not for use in patients with type 1 diabetes mellitus or a history of pancreatitis.',
      }, revenue23: {
        value: '95,718',
        curr: 'kr. DKK Million',
        profit: 'up',
        percent: '+66',
      }, revenue22: {
        value: '57,661',
        curr: 'kr. DKK Million',
      }, approved: {
        imgSrc: null,
        name: 'marstacimab (PF-06741086) (Hemophilia (Biologic)',
        desc: 'FAST TRACK - U.S., ORPHAN - U.S., E.U.)'
      }, rd: {
        value: '1'
      }
    },
    {
      sno: {
        value: 2,
        profit: null,
        percent: null,
      }, company: {
        imgSrc: Medicine_3,
        altValue: 'Novo Nordisk',
        name: 'Wegovy',
        desc: '- Reduce risk of major adverse cardiovascular events in adults with established cardiovascular disease and either obesity or overweight.- Reduce excess body weight and maintain weight reduction long term in adults and pediatric patients aged 12 years and older with obesity.- Reduce excess body weight and maintain weight reduction long term in adults with overweight in the presence of at least one weight related comorbid condition.',
      }, revenue23: {
        value: '31,343',
        curr: 'kr. DKK Million',
        profit: 'up',
        percent: '+420',
      }, revenue22: {
        value: '6,028',
        curr: 'kr. DKK Million',
      }, approved: {
        imgSrc: null,
        name: 'marstacimab (PF-06741086) (Hemophilia (Biologic)',
        desc: 'FAST TRACK - U.S., ORPHAN - U.S., E.U.)'
      }, rd: {
        value: '1'
      }
    },
  ],
  'Eli lilly': [
    {
      sno: {
        value: 1,
        profit: null,
        percent: null,
      }, company: {
        imgSrc: Medicine_2,
        altValue: '',
        name: 'Trulicity',
        desc: '- Improve glycemic control in adults and pediatric patients with type 2 diabetes mellitus.- Reduce the risk of major adverse cardiovascular events in adults with type 2 diabetes mellitus with established cardiovascular disease or multiple cardiovascular risk factors.',
      }, revenue23: {
        value: '7,132',
        curr: '$ Dollar Million',
        profit: 'down',
        percent: '-4',
      }, revenue22: {
        value: '7,439',
        curr: '$ Dollar Million',
      }, approved: {
        imgSrc: null,
        name: '',
        desc: ''
      }, rd: {
        value: '1'
      }
    },
    {
      sno: {
        value: 2,
        profit: null,
        percent: null,
      }, company: {
        imgSrc: Medicine_2,
        altValue: '',
        name: 'Bristol Myers Suibb',
        name2: 'Eliquis',
        desc: 'Secondary Stroke Prevention',
      }, revenue23: {
        value: '5,163',
        curr: '$ Dollar Million',
        profit: 'up',
        percent: '+970',
      }, revenue22: {
        value: '482',
        curr: '$ Dollar Million',
      }, approved: {
        imgSrc: null,
        name: '',
        desc: ''
      }, rd: {
        value: '1'
      }
    },
  ],
};


// CustomTable component
const CustomTable = ({ selectedOption, searchValue }) => {

  const temp = data[selectedOption.name];
  console.log(temp);
  const [rows, setRows] = useState(temp);

  useEffect(() => {
    setRows(data[selectedOption.name]);
  }, [selectedOption])

  useEffect(() => {
    console.log("First time it is working");
    const filteredItems = data[selectedOption.name].filter((item) => {
      console.log(item);
      return (item.company.name.toLowerCase().includes(searchValue) ||
        item.company.desc.toLowerCase().includes(searchValue) ||
        item.company.altValue.toLowerCase().includes(searchValue) ||
        item.revenue23.value.toLowerCase().includes(searchValue) ||
        item.revenue22.value.toLowerCase().includes(searchValue)
      )
    }
    );

    setRows(filteredItems);
    console.log(filteredItems);


    //   if (filteredItems.length > 0) {
    //     results.push(...filteredItems); // Spread operator to add items from filteredItems
    //   }
    // console.log(results);
    console.log(searchValue);
  }, [searchValue]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '1118px', tableLayout: 'fixed', borderRadius: '10px' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ width: '80px', height: '46px' }}>S. No</StyledTableCell> {/* Serial number column */}
            <StyledTableCell sx={{ width: '326px', height: '46px'}}>Company (Innovator)</StyledTableCell>
            <StyledTableCell  sx={{ width: '161px', height: '46px' }}>2023 Revenue ($M)</StyledTableCell>
            <StyledTableCell  sx={{ width: '161px', height: '46px'}}>2022 Revenue ($M)</StyledTableCell>
            <StyledTableCell sx={{ backgroundColor: '#7CC8FD !important', width: '300px', height: '46px' }}>R&D pipeline - Approved</StyledTableCell>
            <StyledTableCell  sx={{ backgroundColor: '#B9E0FE !important', width: '300px', height: '46px'}}>R&D pipeline</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row, index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell sx={{
                backgroundColor:
                  row?.sno?.profit === 'up' ? '#E3F5E3 !important' :
                    row?.sno?.profit === 'down' ? '#FFF1F1 !important' : 'inherit'
              }} component="th" scope="row">
                <div>{row.sno.value}</div>
                {row?.sno?.percent && (
                    row?.sno?.percent[0] === '+' ? <div className='flex gap-[4px] text-[#067647]'><img src={UpArrow} alt='up arrow' /><div className='font-[700]'>{`(${row?.sno?.percent})`}</div></div> : <div className='flex gap-[4px] text-[#FF4C4C]'><img src={DownArroww} alt='up arrow' /><div className='font-[700]'>{`(${row?.sno?.percent})`}</div></div>
                  )
                  }
              </StyledTableCell>
              <StyledTableCell>
                {row?.company?.imgSrc && <img src={row?.company?.imgSrc} alt={row?.company.altValue} style={{ width: '50px', height: '50px' }} />}
                <div className='text-[#1F1F1F] text-[16px] leading-[24px] font-[500]'>{row?.company?.name}</div>
                <div className='text-[#4D4D4D] text-[12px] leading-[18.9px] font-[400]'>{row?.company?.desc}</div>
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  backgroundColor:
                    row?.revenue23?.profit === 'up' ? '#E3F5E3 !important' :
                      row?.revenue23?.profit === 'down' ? '#FFF1F1 !important' : 'inherit'
                }}
                align="left"
              >
                <div className='flex gap-[8px]'>
                  <div>{row?.revenue23?.value}</div>

                  {row?.revenue23?.percent && (
                    row?.revenue23?.percent[0] === '+' ? <div className='flex gap-[4px] text-[#067647]'><img src={UpArrow} alt='up arrow' /><div className='font-[700]'>{`(${row?.revenue23?.percent})%`}</div></div> : <div className='flex gap-[4px] text-[#FF4C4C]'><img src={DownArroww} alt='up arrow' /><div className='font-[700]'>{`(${row?.revenue23?.percent})%`}</div></div>
                  )
                  }
                </div>
                <div className='w-[101px] h-[24px] bg-[#FCFBFF] mt-2 rounded-[20px] border text-[11px] py-[4px] px-[10px] leading-[16.2px]'>{row.revenue23.curr}</div>
              </StyledTableCell>
              <StyledTableCell sx={{ backgroundColor: 'lightblue' }} align="left">
                <div>
                  <div>{row?.revenue22?.value}</div>
                </div>
                <div className='w-[101px] h-[24px] bg-[#FCFBFF] mt-2 rounded-[20px] border text-[11px] py-[4px] px-[10px] leading-[16.2px]'>{row?.revenue22?.curr}</div>
              </StyledTableCell>
              <StyledTableCell align="left">
                {row?.approved?.imgSrc && <img src={row?.approved?.imgSrc} alt={row?.approved?.altValue} style={{ width: '20px', height: '20px' }} />}
                <div className='text-[16px] leading-[24px] font-[500] text-[#1F1F1F]'>{row?.approved?.name}</div>
                <div className='text-[14px] leading-[20px] text-[#4D4D4D] '>{row?.approved?.desc}</div>
              </StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
