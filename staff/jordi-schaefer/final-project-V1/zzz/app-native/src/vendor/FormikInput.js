import { useField } from 'formik'
import { StyleSheet, TextInput } from 'react-native'
import theme from '../components/theme'


const FormikInputValue = ({name, ...props}) => {
    const [field, meta, helpers] = useField(name)
    return (
        <>
            <TextInput style={ styles.input }
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props} 
            />
            {meta.error && console.log(meta.error)}
        </>
    )
} 

export default FormikInputValue



const styles = StyleSheet.create({
    input: {
        fontSize: 14,
        fontWeight: 400,
        textAlign: 'center',
        height: 38,
        width: 345,
        borderTopWidth: 1,
        borderTopColor: theme.colors.border,
        padding: 10,
    }
})