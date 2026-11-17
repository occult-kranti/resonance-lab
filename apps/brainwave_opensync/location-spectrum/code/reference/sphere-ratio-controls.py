"""Independent Decimal reconstruction of ratio/sign/clock controls; no measurement data."""
from decimal import Decimal,getcontext
from pathlib import Path
import argparse,datetime,hashlib,json,subprocess
getcontext().prec=60
D=Decimal
parser=argparse.ArgumentParser();parser.add_argument('--host-root',type=Path,default=Path(__file__).resolve().parents[3]/'resonance-lab');args=parser.parse_args()
def contrast(test_a,ref_a,test_b,ref_b):
 for value in [test_a,ref_a,test_b,ref_b]:assert value>0 and value.is_finite()
 ra=test_a/ref_a;rb=test_b/ref_b
 return {'rA':ra,'rB':rb,'relativeBoverAppm':D(10)**6*(rb/ra-1),'registeredAminusBppb':D(10)**9*(ra-rb)}
def close(a,b):assert abs(a-b)<D('1e-40'),(a,b)
base=contrast(D('250000'),D('200000'),D('249999.75'),D('200000'))
close(base['relativeBoverAppm'],D('-1'));close(base['registeredAminusBppb'],D('1250'))
shared=contrast(D('250000')*D('1.000015'),D('200000')*D('1.000015'),D('249999.75')*D('.999970'),D('200000')*D('.999970'))
for key in base:close(shared[key],base[key])
mismatch=contrast(D('250000'),D('200000'),D('250000')*D('1.000001'),D('200000'))
close(mismatch['relativeBoverAppm'],D('1'));close(mismatch['registeredAminusBppb'],D('-1250'))
wrong_ppb=-D('1000')*base['relativeBoverAppm'];assert wrong_ppb!=base['registeredAminusBppb']
close(base['registeredAminusBppb'],-D('1000')*base['rA']*base['relativeBoverAppm'])
model=args.host_root/'src/workbench/sphere-models.ts'
script="import{runSphereStudy}from'./src/workbench/sphere-models.ts'; console.log(JSON.stringify([runSphereStudy('sphere',{}),runSphereStudy('sphere',{commonPpm:-100}),runSphereStudy('sphere',{commonPpm:100}),runSphereStudy('sphere',{injectedPpm:1})].map(x=>x.metrics)));"
completed=subprocess.run(['node','--experimental-strip-types','--input-type=module','-e',script],cwd=args.host_root,capture_output=True,text=True,check=True)
actual=json.loads(completed.stdout);assert [row[0]['value']for row in actual]==[-1,-1,-1,0];assert actual[0][1]['value']==-.25
encode=lambda x:{key:str(value)for key,value in x.items()}
result={'schema':'independent-sphere-ratio-control/v1','executedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'synthetic-arithmetic-not-measurement','method':'60-digit Decimal arithmetic from four raw frequency estimates; distinct implementation from root first-order producer','units':{'rawFrequency':'Hz','rA':'dimensionless test/reference atA','rB':'dimensionless test/reference atB','relativeBoverAppm':'1e6*(rB/rA-1)','registeredAminusBppb':'1e9*(rA-rB)'},'baseline':{'rawHz':{'testA':'250000','referenceA':'200000','testB':'249999.75','referenceB':'200000'},'result':encode(base)},'varyingSharedMultiplicativeClock':{'positionAErrorPpm':'15','positionBErrorPpm':'-30','result':encode(shared),'verdict':'Both contrast quantities unchanged because error is identical between channels at each position.'},'wrongModelControls':{'naiveUnitConversion':{'predictedPpb':str(wrong_ppb),'actualRegisteredPpb':str(base['registeredAminusBppb']),'verdict':'Fails because baseline rA=1.25 is omitted.'},'channelClockMismatchWithNoTrueShift':{'testBOnlyErrorPpm':'1','result':encode(mismatch),'verdict':'Produces apparent signal without a true mechanical location shift; cancellation is conditional.'}},'rootProducerCheck':{'source':'src/workbench/sphere-models.ts','sha256':hashlib.sha256(model.read_bytes()).hexdigest(),'defaultMetrics':actual[0],'commonClockPpmSweep':[-100,100],'observedPpm':[-1,-1],'injectedThermalCancellationPpm':actual[3][0]['value'],'verdict':'Matches independent thermal fixture within the stated first-order model; no uncertainty or measured effect inferred.'},'limits':['No equivalence margin, uncertainty interval, covariance estimate or physical data is supplied.','The host ratio toy omits differential reference temperature, channel-specific clocks and time mismatch.','Same-clock cancellation is exact only for the declared common multiplicative error model.']}
out=Path(__file__).resolve().parents[1]/'research/sphere-ratio-controls.json';out.write_text(json.dumps(result,indent=2)+'\n');print(json.dumps({'status':'passed','rootDefaultPpm':-1,'registeredContrastPpb':1250,'wrongNaivePpb':1000,'wrongClockSignalPpm':1}))
