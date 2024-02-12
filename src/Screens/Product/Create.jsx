import React from 'react';
import { Button, Card, FormControlLabel, IconButton, InputAdornment, MenuItem, Switch, TextField, Tooltip, Typography } from '@mui/material';
import IconBreadcrumbs from '../../components/UI/Breadcrumbs';
import CheckboxesTags from '../../components/Forms/Select';
import AutoModeOutlinedIcon from '@mui/icons-material/AutoModeOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';

const currencies = [
  { value: 'USD', label: '$' },
  { value: 'EUR', label: '€' },
  { value: 'BTC', label: '฿' },
  { value: 'JPY', label: '¥' },
];

function Create() {
  return (
    <div>
      <Typography gutterBottom variant='h3'>
        Create New Product
      </Typography>
      <IconBreadcrumbs/>

      <div className="grid grid-cols-3 items-center space-y-8">
        <div>
          <Typography variant='h4'>
            Details
          </Typography>
          <Typography gutterBottom variant='body1'>
            Product Name, Description and Image
          </Typography>
        </div>
        <div className="col-span-2">
          <Card className='p-5'>
            <div className="space-y-6">
              <TextField
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    <IconButton color='primary'><AutoModeOutlinedIcon/></IconButton>
                  </InputAdornment>,
                }}
                fullWidth
                label='Enter Product Name'
              />
              <TextField
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    <Tooltip title="Generate Description Through AI"><IconButton color='primary'><AutoModeOutlinedIcon/></IconButton></Tooltip>
                    <Tooltip title="Listen"><IconButton color='primary'><MicNoneOutlinedIcon/></IconButton></Tooltip>
                  </InputAdornment>,
                }}
                multiline 
                minRows={4} 
                fullWidth 
                label='Enter Product Description' 
              />
              <TextField multiline minRows={4} fullWidth label='Enter Product Description' />
            </div>
          </Card>
        </div>
        <div>
          <Typography variant='h4'>
            Properties
          </Typography>
          <Typography gutterBottom variant='body1'>
            Product Name, Description and Image
          </Typography>
        </div>
        <div className="col-span-2">
          <Card className='p-5'>
            <div className="grid grid-cols-2 gap-6">
              <TextField fullWidth label='Enter Product Label' />
              <TextField fullWidth label='Enter Product SKU' />
              <TextField type='number' fullWidth label='Enter Product Quantity' />
              <TextField fullWidth select label="Select Product Category">
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <CheckboxesTags/>
              <CheckboxesTags/>
            </div>
            <div className="mt-8">
              <FormControlLabel control={<Switch />} label="Featured Product" />
            </div>
            <div className="mt-4">
              <FormControlLabel control={<Switch />} label="Featured on Homepage" />
            </div>
          </Card>
        </div>
        <div>
          <Typography variant='h4'>
            Pricing
          </Typography>
          <Typography gutterBottom variant='body1'>
            Product Name, Description and Image
          </Typography>
        </div>
        <div className="col-span-2">
          <Card className='p-5'>
            <div className="space-y-6">
              <TextField type='number' fullWidth label='Enter Original Price' />
              <TextField type='number' fullWidth label='Enter Sale Price' />
              <Button fullWidth variant='contained'>Create Product</Button>
            </div>
          </Card>
        </div>
      </div>
      <div className="h-12"></div>
    </div>
  );
}

export default Create;
